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
  const validationMessageContentMap =
    validationMessageDictionary.getContentMap(locale);

  return z.object<{
    [Key in keyof CreateUserDto]: ZodTypeAny;
  }>({
    login: z
      .string()
      .min(1, validationMessageContentMap.loginRequired)
      .min(4, validationMessageContentMap.loginMin)
      .max(32, validationMessageContentMap.loginMax),
    name: z
      .string()
      .min(1, validationMessageContentMap.nameRequired)
      .min(4, validationMessageContentMap.nameMin)
      .max(32, validationMessageContentMap.nameMax),
    password: z
      .string()
      .min(1, validationMessageContentMap.passwordRequired)
      .min(6, validationMessageContentMap.passwordMin)
      .max(32, validationMessageContentMap.passwordMax),
  });
};

export { getSignUpSchema };
