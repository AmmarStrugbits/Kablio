'use client'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { ComponentType, ReactElement, ReactNode, useContext, useEffect, useState } from 'react';
import LoadingAnimation from '@/shared/components/LoadingAnimation';
import { apiAuth, apiAuthRefreshToken } from '@/services/axios/axios.interceptors';
import { setAuthTokenCookies } from '@/utils/cookies';
import { AuthContext } from '@/contexts/AuthContext';

type WithPublicProps = {
    children?: ReactNode;
};
async function checkIfAuthenticated(): Promise<boolean> {
    if (typeof window === 'undefined') return false;
    const accessToken = await Cookies.get("accessToken");
    // const refreshToken = Cookies.get("refreshToken");
    if (accessToken) {
        return true;
    } else {
        window.localStorage.removeItem('user');
        return false;
    }
}

export function withPublic<T extends WithPublicProps>(Component: ComponentType<T>) {
    return function WithPublic(props: T): ReactElement | null {
        const router = useRouter();
        const { user, setUser } = useContext(AuthContext);
        const [isLoading, setIsLoading] = useState(true);

        async function fetchAndSetUser() {
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
        };
        useEffect(() => {
            const authenticate = async () => {
                await fetchAndSetUser();
                const authStatus = await checkIfAuthenticated();
                if (authStatus) {
                    router.push('/account/matches');
                    return;
                }
                setIsLoading(false);
            };
            authenticate();
        }, [router]);

        if (isLoading) {
            return <LoadingAnimation />;
        }
        return <Component {...props} />;
    }
}
