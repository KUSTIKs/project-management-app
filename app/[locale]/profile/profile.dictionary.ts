import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const profileDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'Profile',
    name: 'name',
    login: 'login',
    update: 'Update',
  },
  [LocaleName.RU]: {
    title: 'Профиль',
    name: 'имя',
    login: 'логин',
    update: 'Обновить',
  },
});

export { profileDictionary };
