import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const userModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    deleteAccount: 'Delete account',
    yourAccount: 'your account',
  },
  [LocaleName.RU]: {
    deleteAccount: 'Удалить аккаунт',
    yourAccount: 'свой аккаунт',
  },
  [LocaleName.UK]: {
    deleteAccount: 'Видалити аккаунт',
    yourAccount: 'свой аккаунт',
  },
  [LocaleName.CS]: {
    deleteAccount: 'Smazat účet',
    yourAccount: 'svůj účet',
  },
});

export { userModalsDictionary };
