import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const getDeleteEntityModalDictionary = (vars: { entityName: string }) =>
  new ContentDictionary({
    [LocaleName.EN]: {
      title: `Delete ${vars.entityName}`,
      message: `This action cannot be undone. Are you sure you want to delete this ${vars.entityName}?`,
      cancel: 'Cancel',
      delete: 'Delete',
    },
    [LocaleName.RU]: {
      title: `Удалeние '${vars.entityName}'`,
      message: `Это действие не может быть отменено. Вы уверены, что хотите удалить '${vars.entityName}'?`,
      cancel: 'Отмена',
      delete: 'Удалить',
    },
  });

export { getDeleteEntityModalDictionary };
