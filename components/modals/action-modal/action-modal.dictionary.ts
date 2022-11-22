import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const actionModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    cancel: 'Cancel',
  },
  [LocaleName.RU]: {
    cancel: 'Отмена',
  },
});

export { actionModalDictionary };
