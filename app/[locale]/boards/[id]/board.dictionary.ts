import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const boardDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    newColumn: 'New column',
    edit: 'Edit',
    noBoardFound: 'No board found',
  },
  [LocaleName.RU]: {
    newColumn: 'Новая колонка',
    edit: 'Изменить',
    noBoardFound: 'Доска не найдена',
  },
});

export { boardDictionary };
