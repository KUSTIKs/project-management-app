import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const authDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    signUp: 'Sign up',
    logIn: 'Log in',
    username: 'username',
    login: 'login',
    password: 'password',
    submit: 'Submit',
    logInMessage: 'Don`t have an account?',
    signUpMessage: 'Have an account?',
  },
  [LocaleName.RU]: {
    signUp: 'Зарегистрироваться',
    logIn: 'Войти',
    username: 'имя пользователя',
    login: 'логин',
    password: 'пароль',
    submit: 'Подтвердить',
    logInMessage: 'Нет учетной записи?',
    signUpMessage: 'Есть учетная запись?',
  },
});

export { authDictionary };
