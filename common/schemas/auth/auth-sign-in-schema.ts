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
  [LocaleName.UK]: {
    loginRequired: "Логін обов'язковий",
    passwordRequired: "Пароль обов'язковий",
  },
  [LocaleName.CS]: {
    loginRequired: 'Přihlášení je vyžadováno',
    passwordRequired: 'Heslo je vyžadováno',
  },
});

const getSignInSchema = ({ locale }: { locale: AppLocale }) => {
  const contentMap = validationMessageDictionary.getContentMap({ locale });

  return z.object<{
    [Key in keyof SignInUserDto]: ZodTypeAny;
  }>({
    login: z.string().min(1, {
      message: contentMap.loginRequired,
    }),
    password: z.string().min(1, {
      message: contentMap.passwordRequired,
    }),
  });
};

export { getSignInSchema };
