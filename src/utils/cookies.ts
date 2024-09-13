import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

/**
* Set AuthTokens received from the server, delete previous ones if they exist
* @response - The Axios Response
* @returns - 
*/
export function setAuthTokenCookies(response: AxiosResponse): void {
  if (Cookies.get('accessToken')) {
    Cookies.remove('accessToken');
  }
  Cookies.set('accessToken', response.data['accessToken']);

  if (Cookies.get('refreshToken')) {
    Cookies.remove('refreshToken');
  }
  Cookies.set('refreshToken', response.data['refreshToken']);

  if (Cookies.get('TFARequired')) {
    Cookies.remove('TFARequired');
  }
  Cookies.set('TFARequired', response.data['TFARequired']);
}
