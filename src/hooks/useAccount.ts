"use client"

import { useAuth } from "@/hooks/useAuth"
import { useEffect } from "react";
import Cookies from "js-cookie";

import { apiAuth, apiAuthRefreshToken } from '@/services/axios/axios.interceptors';
import { setAuthTokenCookies } from "@/utils/cookies";
import { useRouter, useSearchParams } from "next/navigation";

export const useAccount = () => {
  const router = useRouter();
  const { user, setUser } = useAuth();
  const searchParams = useSearchParams();

  useEffect(() => {
    const setCookiesFromQueryParams = () => {
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
    }


    function setFromLocalStorage() {
      const data = window.localStorage.getItem('user');
      if (data) {
        const user = JSON.parse(data);
        setUser(user);
        return;
      }
    }

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

      if (!refreshToken) {
        router.push('/auth/login');
      }
    };

    if (router) {
      setCookiesFromQueryParams()
      setFromLocalStorage();
      fetchAndSetUser();
    }
  }, [router, searchParams, setUser]);

  return {
    user
  }
}