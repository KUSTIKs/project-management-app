import { z, ZodTypeAny } from 'zod';

import { AppLocale, CreateColumnDto } from '@project-management-app/types';
import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const validationMessageDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    titleRequired: 'Title is required',
    titleMin: (value: number) => `Title min length is ${value}`,
    titleMax: (value: number) => `Title max length is ${value}`,
  },
  [LocaleName.RU]: {
    titleRequired: 'Заголовок обязателен',
    titleMin: (value: number) => `Заголовок должен иметь от ${value} символов`,
    titleMax: (value: number) => `Заголовок должен иметь до ${value} символов`,
  },
  [LocaleName.UK]: {
    titleRequired: "Заголовок обов'язковий",
    titleMin: (value: number) => `Заголовок повинен мати від ${value} символів`,
    titleMax: (value: number) => `Заголовок повинен мати до ${value} символів`,
  },
});

const getCreateColumnSchema = ({ locale }: { locale: AppLocale }) => {
  const contentMap = validationMessageDictionary.getContentMap({ locale });

  return z.object<{
    [Key in keyof CreateColumnDto]: ZodTypeAny;
  }>({
    title: z
      .string()
      .min(1, contentMap.titleRequired)
      .min(4, contentMap.titleMin(4))
      .max(32, contentMap.titleMax(32)),
  });
};

export { getCreateColumnSchema };
