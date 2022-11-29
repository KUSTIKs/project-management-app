import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const userModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    deleteAccount: 'Delete account',
    account: 'account',
  },
  [LocaleName.RU]: {
    deleteAccount: 'Удалить аккаунт',
    account: 'аккаунт',
  },
  [LocaleName.UK]: {
    deleteAccount: 'Видалити аккаунт',
    account: 'аккаунт',
  },
  [LocaleName.CS]: {
    deleteAccount: 'Smazat účet',
    account: 'účet',
  },
});

export { userModalsDictionary };
