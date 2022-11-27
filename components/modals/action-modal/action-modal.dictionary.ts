import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const actionModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    cancel: 'Cancel',
    errorMessage: 'Something went wrong',
  },
  [LocaleName.RU]: {
    cancel: 'Отмена',
    errorMessage: 'Что-то пошло не так',
  },
  [LocaleName.UK]: {
    cancel: 'Скасувати',
    errorMessage: 'Щось пішло не так',
  },
});

export { actionModalDictionary };
