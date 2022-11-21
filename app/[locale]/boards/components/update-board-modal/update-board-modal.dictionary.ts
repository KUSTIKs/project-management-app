import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const updateBoardModalDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    description: 'description',
    updateBoard: 'Update board',
    update: 'Update',
    cancel: 'Cancel',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    description: 'описание',
    updateBoard: 'Обновить доску',
    update: 'Обновить',
    cancel: 'Отмена',
  },
});

export { updateBoardModalDictionary };
