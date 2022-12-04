import { AppLocale } from './app-locale.type';
import { TokenPayload } from './token-payload.type';

type AppState = {
  locale: AppLocale;
  payload: TokenPayload | null | undefined;
  isAuthorized: boolean;
};

export type { AppState };
