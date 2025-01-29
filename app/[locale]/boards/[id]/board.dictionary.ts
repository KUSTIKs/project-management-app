import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const boardDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    newColumn: 'New column',
    boardDetails: 'Board details',
    edit: 'Edit',
    noBoardFound: 'No board found',
    noTaskFound: 'No task found',
  },
  [LocaleName.RU]: {
    newColumn: 'Новая колонка',
    boardDetails: 'Детали доски',
    edit: 'Изменить',
    noBoardFound: 'Доска не найдена',
    noTaskFound: 'Задание не найдено',
  },
  [LocaleName.UK]: {
    newColumn: 'Нова колонка',
    boardDetails: 'Деталі дошки',
    edit: 'Змінити',
    noBoardFound: 'Дошка не знайдена',
    noTaskFound: 'Завдання не знайдено',
  },
  [LocaleName.CS]: {
    newColumn: 'Nový sloupec',
    boardDetails: 'Podrobnosti o desce',
    edit: 'Upravit',
    noBoardFound: 'Deska nebyla nalezena',
    noTaskFound: 'Úkol nebyl nalezen',
  },
});

export { boardDictionary };
