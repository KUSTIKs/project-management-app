import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const boardDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    newColumn: 'New column',
    edit: 'Edit',
    noBoardFound: 'No board found',
    noTaskFound: 'No task found',
  },
  [LocaleName.RU]: {
    newColumn: 'Новая колонка',
    edit: 'Изменить',
    noBoardFound: 'Доска не найдена',
    noTaskFound: 'Задание не найдено',
  },
  [LocaleName.UK]: {
    newColumn: 'Нова колонка',
    edit: 'Змінити',
    noBoardFound: 'Дошка не знайдена',
    noTaskFound: 'Завдання не знайдено',
  },
});

export { boardDictionary };
