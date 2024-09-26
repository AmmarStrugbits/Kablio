"use client"

import { AuthContext } from "@/contexts/AuthContext";
import { api, apiAuth } from "@/services/axios/axios.interceptors";
import { useCallback, useContext } from "react";
import Cookies from 'js-cookie';
import { User } from "@/shared/interfaces/User.interfaces";
import { setAuthTokenCookies } from "@/utils/cookies";

import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  const login = useCallback(async (email: string, password: string) => {
    const authToken = await api.post('/auth/user/login', { email, password });
    setAuthTokenCookies(authToken);
    const res = await apiAuth.get('/user');
    if (res.status === 200) {
      setUser(res.data as User);
      router.push('/account/matches');
    }
  }, [router, setUser]);

  const logout = useCallback(() => {
    if (typeof window === 'undefined') return false;
    window.localStorage.removeItem('user');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  }, []);

  const checkCredentials = useCallback(() => {
    if (typeof window === 'undefined') return false;
    const user = window.localStorage.getItem('user');
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    if (user && (accessToken || refreshToken)) {
      return true;
    } else {
      window.localStorage.removeItem('user');
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      return false;
    }
  }, []);

  return {
    user,
    setUser,
    login,
    logout,
    checkCredentials
  }

};