import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const boardsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'Boards',
    newBoard: 'New board',
    noBoardsMessage: 'No boards created yet',
  },
  [LocaleName.RU]: {
    title: 'Доски',
    newBoard: 'Новая доска',
    noBoardsMessage: 'Доски еще не созданы',
  },
  [LocaleName.UK]: {
    title: 'Дошки',
    newBoard: 'Нова дошка',
    noBoardsMessage: 'Дошки ще не створені',
  },
  [LocaleName.CS]: {
    title: 'Desky',
    newBoard: 'Nová deska',
    noBoardsMessage: 'Zatím nebyly vytvořeny žádné desky',
  },
});

export { boardsDictionary };
