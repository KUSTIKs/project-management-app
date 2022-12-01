import { TokenPayload } from '../token-payload/token-payload.type';
import { AppLocale } from './app-locale.type';

type AppState = {
  locale: AppLocale;
  payload: TokenPayload | null | undefined;
  isAuthorized: boolean;
};

export type { AppState };
