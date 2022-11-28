import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const modalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    cancel: 'Cancel',
    create: 'Create',
    delete: 'Delete',
    update: 'Update',
    copyLink: 'Copy link',
    copied: 'Copied',
    notCopied: 'Not copied',
    somethingWentWrong: 'Something went wrong',
  },
  [LocaleName.RU]: {
    cancel: 'Отмена',
    create: 'Создать',
    delete: 'Удалить',
    update: 'Обновить',
    copyLink: 'Копировать ссылку',
    copied: 'Скопировано',
    notCopied: 'Не скопировано',
    somethingWentWrong: 'Что-то пошло не так',
  },
  [LocaleName.UK]: {
    cancel: 'Скасувати',
    create: 'Створити',
    delete: 'Видалити',
    update: 'Оновити',
    copyLink: 'Копіювати посилання',
    copied: 'Скопійовано',
    notCopied: 'Не скопійовано',
    somethingWentWrong: 'Щось пішло не так',
  },
});

export { modalsDictionary };
