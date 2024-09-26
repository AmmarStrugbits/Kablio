"use client"

import { User } from '@/shared/interfaces/User.interfaces';
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';

interface AuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => { },
  isLoading: false,
  setIsLoading: () => { }
});


export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    const ls = window.localStorage.getItem('user');

    // const accessToken = Cookies.get('accessToken');
    // const refreshToken = Cookies.get('refreshToken');

    if (ls) {
      const user: User = JSON.parse(ls);
      setUser(user);
    } else {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </AuthContext.Provider>
  )
}