import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const getDeleteEntityModalDictionary = (vars: { entityName: string }) =>
  new ContentDictionary({
    [LocaleName.EN]: {
      message: `This action cannot be undone. Are you sure you want to delete ${vars.entityName}?`,
    },
    [LocaleName.RU]: {
      message: `Это действие не может быть отменено. Вы уверены, что хотите удалить ${vars.entityName}?`,
    },
    [LocaleName.UK]: {
      message: `Ця дія не може бути скасована. Ви впевнені, що хочете видалити ${vars.entityName}?`,
    },
    [LocaleName.CS]: {
      message: `Tuto akci nelze vrátit zpět. Jste si jisti, že chcete smazat ${vars.entityName}?`,
    },
  });

export { getDeleteEntityModalDictionary };
