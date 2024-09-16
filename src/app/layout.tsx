"use client"

/*
| Developed by Reskue
| Filename: layout.tsx
| Author: eric@reskue.tech
*/

import './globals.css'
import ThemeRegistry from '../MUI/ThemeRegistry'
import AuthProvider from '@/contexts/AuthContext';
import { Suspense } from 'react';
import { SnackbarProvider } from 'notistack';
import CookieConsent from 'react-cookie-consent';

/*
|--------------------------------------------------------------------------
| Component
|--------------------------------------------------------------------------
*/
export default function RootLayout(props: any) {
  const { children } = props;
  // Render
  //--------------------------------------------------------------------------

  return (
    <html lang="en">
      <body>
        <Suspense>
          <AuthProvider>
            <SnackbarProvider autoHideDuration={1500}>
              <ThemeRegistry options={{ key: 'mui' }}>
                {children}
              </ThemeRegistry>
            </SnackbarProvider>

          </AuthProvider>
        </Suspense>
      </body>
      <CookieConsent
        location="bottom"
        buttonText="Ok, I understand"
        cookieName="AcceptCookies"
        style={{ background: "white", color: "black", fontFamily: 'roboto', display:"flex"}}
        expires={150}
      >
        This website requires the usage of cookies to work properly.
      </CookieConsent>
    </html>
  );
}
