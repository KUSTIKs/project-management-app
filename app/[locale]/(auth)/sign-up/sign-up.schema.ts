import { z, ZodTypeAny } from 'zod';

import { AppLocale, CreateUserDto } from '@project-management-app/types';
import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const validationMessageDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    loginRequired: 'Login is required',
    loginMin: 'Login min length is 4',
    loginMax: 'Login max length is 32',
    nameRequired: 'Name is required',
    nameMin: 'Name min length is 4',
    nameMax: 'Name max length is 32',
    passwordRequired: 'Password is required',
    passwordMin: 'Password min length is 6',
    passwordMax: 'Password max length is 32',
  },
  [LocaleName.RU]: {
    loginRequired: 'Логин обязателен',
    loginMin: 'Логин должен иметь от 4 символов',
    loginMax: 'Логин должен иметь до 32 символов',
    nameRequired: 'Имя обязателено',
    nameMin: 'Имя должно иметь от 4 символов',
    nameMax: 'Имя должно иметь до 32 символов',
    passwordRequired: 'Пароль обязателен',
    passwordMin: 'Пароль должен иметь от 6 символов',
    passwordMax: 'Пароль должен иметь до 32 символов',
  },
});

const getSignUpSchema = ({ locale }: { locale: AppLocale }) => {
  const contentMap = validationMessageDictionary.getContentMap({ locale });

  return z.object<{
    [Key in keyof CreateUserDto]: ZodTypeAny;
  }>({
    login: z
      .string()
      .min(1, contentMap.loginRequired)
      .min(4, contentMap.loginMin)
      .max(32, contentMap.loginMax),
    name: z
      .string()
      .min(1, contentMap.nameRequired)
      .min(4, contentMap.nameMin)
      .max(32, contentMap.nameMax),
    password: z
      .string()
      .min(1, contentMap.passwordRequired)
      .min(6, contentMap.passwordMin)
      .max(32, contentMap.passwordMax),
  });
};

export { getSignUpSchema };
