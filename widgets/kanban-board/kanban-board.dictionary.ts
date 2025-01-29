import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const kanbanBoardDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    noColumns: 'No columns created yet',
  },
  [LocaleName.RU]: {
    noColumns: 'Колонки еще не созданы',
  },
  [LocaleName.UK]: {
    noColumns: 'Колонки ще не створені',
  },
  [LocaleName.CS]: {
    noColumns: 'Sloupce ještě nebyly vytvořeny',
  },
});

export { kanbanBoardDictionary };
