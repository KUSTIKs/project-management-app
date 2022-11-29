import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const searchModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    nothingFound: 'Nothing found',
    typeHere: 'Type here',
    all: 'All',
    boards: 'Boards',
    tasks: 'Tasks',
  },
  [LocaleName.RU]: {
    nothingFound: 'Ничего не найдено',
    typeHere: 'Вводите запрос тут',
    all: 'Всё',
    boards: 'Доски',
    tasks: 'Задания',
  },
  [LocaleName.UK]: {
    nothingFound: 'Нічого не знайдено',
    typeHere: 'Введіть запит тут',
    all: 'Все',
    boards: 'Дошки',
    tasks: 'Завдання',
  },
  [LocaleName.CS]: {
    nothingFound: 'Nic nebylo nalezeno',
    typeHere: 'Zadejte dotaz zde',
    all: 'Všechny',
    boards: 'Desky',
    tasks: 'Úlohy',
  },
});

export { searchModalDictionary };
