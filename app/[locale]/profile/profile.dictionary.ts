import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const profileDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'Profile',
    name: 'name',
    login: 'login',
    password: 'password',
    update: 'Update',
    delete: 'Delete',
    cancel: 'Cancel',
    somethingWrong: 'Something went wrong',
  },
  [LocaleName.RU]: {
    title: 'Профиль',
    name: 'имя',
    login: 'логин',
    password: 'пароль',
    update: 'Обновить',
    delete: 'Удалить',
    cancel: 'Отмена',
    somethingWrong: 'Что-то пошло не так',
  },
  [LocaleName.UK]: {
    title: 'Профіль',
    name: "ім'я",
    login: 'логін',
    password: 'пароль',
    update: 'Оновити',
    delete: 'Видалити',
    cancel: 'Скасувати',
    somethingWrong: 'Щось пішло не так',
  },
  [LocaleName.CS]: {
    title: 'Profil',
    name: 'jméno',
    login: 'přihlášení',
    password: 'heslo',
    update: 'Aktualizovat',
    delete: 'Smazat',
    cancel: 'Zrušit',
    somethingWrong: 'Něco se pokazilo',
  },
});

export { profileDictionary };
