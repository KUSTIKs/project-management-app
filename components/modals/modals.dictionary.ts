import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const modalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    cancel: 'Cancel',
    create: 'Create',
    delete: 'Delete',
    update: 'Update',
    somethingWentWrong: 'Something went wrong',
  },
  [LocaleName.RU]: {
    cancel: 'Отмена',
    create: 'Создать',
    delete: 'Удалить',
    update: 'Обновить',
    somethingWentWrong: 'Что-то пошло не так',
  },
  [LocaleName.UK]: {
    cancel: 'Скасувати',
    create: 'Створити',
    delete: 'Видалити',
    update: 'Оновити',
    somethingWentWrong: 'Щось пішло не так',
  },
});

export { modalsDictionary };
