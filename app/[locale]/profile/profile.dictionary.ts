import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const profileDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'Profile',
    username: 'username',
    login: 'login',
    update: 'Update',
  },
  [LocaleName.RU]: {
    title: 'Профиль',
    username: 'имя пользователя',
    login: 'логин',
    update: 'Обновить',
  },
});

export { profileDictionary };
