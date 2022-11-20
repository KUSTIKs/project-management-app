import Cookies from 'js-cookie';

import { CookieName, HttpMethod } from '@project-management-app/enums';
import { appFetch } from '@project-management-app/helpers';
import {
  User,
  SignInUserDto,
  SignInUserResponseDto,
} from '@project-management-app/types';

class AuthService {
  async signIn(dto: SignInUserDto) {
    const response = await appFetch('/signin', {
      method: HttpMethod.POST,
      body: JSON.stringify(dto),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    Cookies.set(CookieName.NEXT_TOKEN, data.token);

    return data as SignInUserResponseDto;
  }

  async signUp(dto: SignInUserDto) {
    const response = await appFetch('/signup', {
      method: HttpMethod.POST,
      body: JSON.stringify(dto),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw data;
    }

    return data as User;
  }
}

const authService = new AuthService();

export { authService };
