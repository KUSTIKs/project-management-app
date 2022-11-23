import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const kanbanBoardDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    noColumns: 'No columns created yet',
  },
  [LocaleName.RU]: {
    noColumns: 'Колонки еще не созданы',
  },
});

export { kanbanBoardDictionary };
