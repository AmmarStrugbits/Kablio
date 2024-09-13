"use client"

import axios, { InternalAxiosRequestConfig } from "axios";
import Cookies from 'js-cookie';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export const apiAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const apiAuthRefreshToken = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/************************* Request Interceptor *************************/
apiAuth.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiAuth.interceptors.response.use(
  response => response,
  error => {
    if (!error.response)
      window.location.href = `${process.env.NEXT_FRONT_URL}`;
    if (error.response.status === 401) {
      window.localStorage.clear();
      Cookies.remove('accessToken');
      Cookies.remove('TFARequired');
      window.location.reload();
    }

  }
)

apiAuthRefreshToken.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const refreshToken = Cookies.get('refreshToken');
    if (refreshToken) {
      config.headers['Authorization'] = 'Bearer ' + refreshToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

apiAuthRefreshToken.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      window.localStorage.clear();
      Cookies.remove('refreshToken');
      const loginUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}/auth/login`;
      window.location.href = loginUrl;
    }
    return Promise.reject(error);
  }
);

