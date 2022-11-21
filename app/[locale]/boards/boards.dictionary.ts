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
});

export { boardsDictionary };
