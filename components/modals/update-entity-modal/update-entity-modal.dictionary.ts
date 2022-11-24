import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const updateEntityModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    update: 'Update',
  },
  [LocaleName.RU]: {
    update: 'Обновить',
  },
  [LocaleName.UK]: {
    update: 'Оновити',
  },
});

export { updateEntityModalDictionary };
