import Cookies from 'js-cookie';
import { ApiError } from 'next/dist/server/api-utils';

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
    });

    if (response.ok) {
      const data: SignInUserResponseDto = await response.json();

      Cookies.set(CookieName.NEXT_TOKEN, data.token);

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async signUp(dto: SignInUserDto) {
    const response = await appFetch('/signup', {
      method: HttpMethod.POST,
      body: JSON.stringify(dto),
    });

    if (response.ok) {
      const data: User = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }
}

const authService = new AuthService();

export { authService };
