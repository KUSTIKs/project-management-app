import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const authDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    signUp: 'Sign up',
    signIn: 'Sign in',
    name: 'name',
    login: 'login',
    password: 'password',
    submit: 'Submit',
    signInMessage: 'Don`t have an account?',
    signUpMessage: 'Have an account?',
  },
  [LocaleName.RU]: {
    signUp: 'Регистрация',
    signIn: 'Войти',
    name: 'имя',
    login: 'логин',
    password: 'пароль',
    submit: 'Подтвердить',
    signInMessage: 'Нет учетной записи?',
    signUpMessage: 'Есть учетная запись?',
  },
});

export { authDictionary };
