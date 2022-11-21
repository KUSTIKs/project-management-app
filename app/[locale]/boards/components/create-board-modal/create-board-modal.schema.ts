import { z, ZodTypeAny } from 'zod';

import { AppLocale, CreateBoardDto } from '@project-management-app/types';
import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const validationMessageDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    titleRequired: 'Title is required',
    titleMin: 'Title min length is 4',
    titleMax: 'Title max length is 64',
    descriptionRequired: 'Description is required',
    descriptionMin: 'Description min length is 8',
    descriptionMax: 'Description max length is 256',
  },
  [LocaleName.RU]: {
    titleRequired: 'Заголовок обязателен',
    titleMin: 'Заголовок должен иметь от 4 символов',
    titleMax: 'Заголовок должен иметь до 64 символов',
    descriptionRequired: 'Описание обязателено',
    descriptionMin: 'Описание должно иметь от 8 символов',
    descriptionMax: 'Описание должно иметь до 256 символов',
  },
});

const getCreateBoardSchema = ({ locale }: { locale: AppLocale }) => {
  const contentMap = validationMessageDictionary.getContentMap({ locale });

  return z.object<{
    [Key in keyof CreateBoardDto]: ZodTypeAny;
  }>({
    title: z
      .string()
      .min(1, contentMap.titleRequired)
      .min(4, contentMap.titleMin)
      .max(64, contentMap.titleMax),
    description: z
      .string()
      .min(1, contentMap.descriptionRequired)
      .min(8, contentMap.descriptionMin)
      .max(256, contentMap.descriptionMax),
  });
};

export { getCreateBoardSchema };
