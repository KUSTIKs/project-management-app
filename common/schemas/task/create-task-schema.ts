import { z, ZodTypeAny } from 'zod';

import { AppLocale, CreateTaskDto } from '@project-management-app/types';
import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const validationMessageDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    titleRequired: 'Title is required',
    titleMin: (value: number) => `Title min length is ${value}`,
    titleMax: (value: number) => `Title max length is ${value}`,
    descriptionRequired: 'Description is required',
    descriptionMin: (value: number) => `Description min length is ${value}`,
    descriptionMax: (value: number) => `Description max length is ${value}`,
    userIdRequired: 'Assigned to is required',
  },
  [LocaleName.RU]: {
    titleRequired: 'Заголовок обязателен',
    titleMin: (value: number) => `Заголовок должен иметь от ${value} символов`,
    titleMax: (value: number) => `Заголовок должен иметь до ${value} символов`,
    descriptionRequired: 'Описание обязателено',
    descriptionMin: (value: number) =>
      `Описание должно иметь от ${value} символов`,
    descriptionMax: (value: number) =>
      `Описание должно иметь до ${value} символов`,
    userIdRequired: 'Назначенно на являеться обязательным полем',
  },
  [LocaleName.UK]: {
    titleRequired: "Заголовок обов'язковий",
    titleMin: (value: number) => `Заголовок повинен мати від ${value} символів`,
    titleMax: (value: number) => `Заголовок повинен мати до ${value} символів`,
    descriptionRequired: "Опис обов'язковий",
    descriptionMin: (value: number) =>
      `Опис повинен мати від ${value} символів`,
    descriptionMax: (value: number) => `Опис повинен мати до ${value} символів`,
    userIdRequired: "Призначено на є обов'язковим полем",
  },
});

const getCreateTaskSchema = ({ locale }: { locale: AppLocale }) => {
  const contentMap = validationMessageDictionary.getContentMap({ locale });

  return z.object<{
    [Key in keyof CreateTaskDto]: ZodTypeAny;
  }>({
    title: z
      .string()
      .min(1, contentMap.titleRequired)
      .min(4, contentMap.titleMin(4))
      .max(64, contentMap.titleMax(64)),
    description: z
      .string()
      .min(1, contentMap.descriptionRequired)
      .min(8, contentMap.descriptionMin(8))
      .max(256, contentMap.descriptionMax(256)),
    userId: z.string().min(1, contentMap.userIdRequired),
  });
};

export { getCreateTaskSchema };
