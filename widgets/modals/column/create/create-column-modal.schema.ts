import { z, ZodTypeAny } from 'zod';

import { AppLocale, CreateColumnDto } from '@project-management-app/types';
import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const validationMessageDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    titleRequired: 'Title is required',
    titleMin: 'Title min length is 4',
    titleMax: 'Title max length is 32',
  },
  [LocaleName.RU]: {
    titleRequired: 'Заголовок обязателен',
    titleMin: 'Заголовок должен иметь от 4 символов',
    titleMax: 'Заголовок должен иметь до 32 символов',
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
      .min(4, contentMap.titleMin)
      .max(32, contentMap.titleMax),
  });
};

export { getCreateColumnSchema };
