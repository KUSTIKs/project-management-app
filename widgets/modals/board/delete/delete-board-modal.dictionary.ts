import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const deleteBoardModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    deleteBoard: 'Delete board',
  },
  [LocaleName.RU]: {
    deleteBoard: 'Удалить доску',
  },
});

export { deleteBoardModalDictionary };
