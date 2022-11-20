import { z, ZodTypeAny } from 'zod';

import { AppLocale, SignInUserDto } from '@project-management-app/types';
import { ContentDictionary } from '@project-management-app/helpers';
import { LocaleName } from '@project-management-app/enums';

const validationMessageDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    loginRequired: 'Login is required',
    passwordRequired: 'Password is required',
  },
  [LocaleName.RU]: {
    loginRequired: 'Логин обязателен',
    passwordRequired: 'Пароль обязателен',
  },
});

const getSignInSchema = ({ locale }: { locale: AppLocale }) => {
  const validationMessageContentMap =
    validationMessageDictionary.getContentMap(locale);

  return z.object<{
    [Key in keyof SignInUserDto]: ZodTypeAny;
  }>({
    login: z.string().min(1, {
      message: validationMessageContentMap.loginRequired,
    }),
    password: z.string().min(1, {
      message: validationMessageContentMap.passwordRequired,
    }),
  });
};

export { getSignInSchema };
