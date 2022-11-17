import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const headerDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    boards: 'Boards',
    profile: 'Profile',
    signUp: 'Sign up',
    logIn: 'Log in',
    logOut: 'Log out',
  },
  [LocaleName.RU]: {
    boards: 'Доски',
    profile: 'Профиль',
    signUp: 'Зарегистрироваться',
    logIn: 'Войти',
    logOut: 'Выйти',
  },
});

export { headerDictionary };
