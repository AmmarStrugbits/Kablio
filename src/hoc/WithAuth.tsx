import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';
import { ComponentType, ReactElement, useContext, useEffect, useState } from 'react';
import LoadingAnimation from '@/shared/components/LoadingAnimation';
import { apiAuth, apiAuthRefreshToken } from '@/services/axios/axios.interceptors';
import { AuthContext } from '@/contexts/AuthContext';
import { setAuthTokenCookies } from '@/utils/cookies';

async function checkIfAuthenticated(): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    const accessToken = await Cookies.get("accessToken");
    if (accessToken) {
        return true;
    } else {
        window.localStorage.removeItem('user');
        return false;
    }
}

export function withAuth<T>(Component: ComponentType<T>) {
    return function WithAuth(props: T): ReactElement | null {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const [isLoading, setIsLoading] = useState(true);
        const { user, setUser } = useContext(AuthContext);
        const router = useRouter();
        const searchParams = useSearchParams();

        const handleAuthTokens = () => {
            const accessToken = searchParams.get('accessToken');
            const refreshToken = searchParams.get('refreshToken');
            const TFARequired = searchParams.get('TFARequired');

            if (accessToken)
                Cookies.set('accessToken', accessToken);
            if (refreshToken)
                Cookies.set('refreshToken', refreshToken);
            if (TFARequired)
                Cookies.set('TFARequired', TFARequired);

            const newUrl = window.location.pathname;
            window.history.replaceState({}, '', newUrl);
        };

        async function fetchAndSetUser() {
            try {
                const accessToken = Cookies.get('accessToken');
                if (accessToken) {
                    const res = await apiAuth.get('/user');
                    setUser(res.data);
                    window.localStorage.setItem('user', JSON.stringify(res.data));
                    return;
                }

                const refreshToken = Cookies.get('refreshToken');
                if (refreshToken) {
                    const authTokens = await apiAuthRefreshToken.get('/auth/user/refresh');
                    setAuthTokenCookies(authTokens);
                    const res = await apiAuth.get('/user');
                    setUser(res.data);
                    window.localStorage.setItem('user', JSON.stringify(res.data));
                    return;
                }
            } catch (error) {
                console.error('Error fetching and setting user:', error);
                window.localStorage.clear();
                Cookies.remove('accessToken');
                Cookies.remove('refreshToken');
                router.push('/auth/login');
            }
        };


        useEffect(() => {
            const authenticate = async () => {
                await fetchAndSetUser();
                const authStatus = await checkIfAuthenticated();
                setIsAuthenticated(authStatus);
                setIsLoading(false);
                if (!authStatus) {
                    router.push('/auth/login');
                }
            };
            authenticate();
        }, [router]);

        useEffect(() => {
            handleAuthTokens();
        }, [searchParams]);

        if (isLoading) {
            return <LoadingAnimation />;
        }

        if (!isAuthenticated) {
            return null;
        }

        return <Component {...props} user={user} />;
    }
}