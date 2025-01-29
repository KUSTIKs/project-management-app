import { z, ZodTypeAny } from 'zod';

import { AppLocale, CreateUserDto } from '@project-management-app/types';
import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const validationMessageDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    loginRequired: 'Login is required',
    loginMin: (value: number) => `Login min length is ${value}`,
    loginMax: (value: number) => `Login max length is ${value}`,
    nameRequired: 'Name is required',
    nameMin: (value: number) => `Name min length is ${value}`,
    nameMax: (value: number) => `Name max length is ${value}`,
    passwordRequired: 'Password is required',
    passwordMin: (value: number) => `Password min length is ${value}`,
    passwordMax: (value: number) => `Password max length is ${value}`,
  },
  [LocaleName.RU]: {
    loginRequired: 'Логин обязателен',
    loginMin: (value: number) => `Логин должен иметь от ${value} символов`,
    loginMax: (value: number) => `Логин должен иметь до ${value} символов`,
    nameRequired: 'Имя обязателено',
    nameMin: (value: number) => `Имя должно иметь от ${value} символов`,
    nameMax: (value: number) => `Имя должно иметь до ${value} символов`,
    passwordRequired: 'Пароль обязателен',
    passwordMin: (value: number) => `Пароль должен иметь от ${value} символов`,
    passwordMax: (value: number) => `Пароль должен иметь до ${value} символов`,
  },
  [LocaleName.UK]: {
    loginRequired: "Логін обов'язковий",
    loginMin: (value: number) => `Логін повинен мати від ${value} символів`,
    loginMax: (value: number) => `Логін повинен мати до ${value} символів`,
    nameRequired: "Ім'я обов'язкове",
    nameMin: (value: number) => `Ім'я повинно мати від ${value} символів`,
    nameMax: (value: number) => `Ім'я повинно мати до ${value} символів`,
    passwordRequired: "Пароль обов'язковий",
    passwordMin: (value: number) => `Пароль повинен мати від ${value} символів`,
    passwordMax: (value: number) => `Пароль повинен мати до ${value} символів`,
  },
  [LocaleName.CS]: {
    loginRequired: 'Přihlášení je vyžadováno',
    loginMin: (value: number) => `Přihlášení musí mít až ${value} znaků`,
    loginMax: (value: number) => `Přihlášení musí mít od ${value} znaků`,
    nameRequired: 'Jméno je vyžadováno',
    nameMin: (value: number) => `Jméno musí mít až ${value} znaků`,
    nameMax: (value: number) => `Jméno musí mít od ${value} znaků`,
    passwordRequired: 'Heslo je vyžadováno',
    passwordMin: (value: number) => `Heslo musí mít až ${value} znaků`,
    passwordMax: (value: number) => `Heslo musí mít od ${value} znaků`,
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
      .min(4, contentMap.loginMin(4))
      .max(32, contentMap.loginMax(32)),
    name: z
      .string()
      .min(1, contentMap.nameRequired)
      .min(4, contentMap.nameMin(4))
      .max(32, contentMap.nameMax(32)),
    password: z
      .string()
      .min(1, contentMap.passwordRequired)
      .min(6, contentMap.passwordMin(6))
      .max(32, contentMap.passwordMax(32)),
  });
};

export { getSignUpSchema };
