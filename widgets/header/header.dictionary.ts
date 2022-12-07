import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const headerDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    boards: 'Boards',
    profile: 'Profile',
    signUp: 'Sign up',
    signIn: 'Sign in',
    logOut: 'Log out',
  },
  [LocaleName.RU]: {
    boards: 'Доски',
    profile: 'Профиль',
    signUp: 'Регистрация',
    signIn: 'Войти',
    logOut: 'Выйти',
  },
  [LocaleName.UK]: {
    boards: 'Дошки',
    profile: 'Профіль',
    signUp: 'Реєстрація',
    signIn: 'Увійти',
    logOut: 'Вийти',
  },
  [LocaleName.CS]: {
    boards: 'Desky',
    profile: 'Profil',
    signUp: 'Registrace',
    signIn: 'Přihlásit',
    logOut: 'Odhlásit',
  },
});

export { headerDictionary };
