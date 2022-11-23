import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const createTaskModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    description: 'description',
    createTask: 'Create task',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    description: 'описание',
    createTask: 'Создать задание',
  },
});

export { createTaskModalsDictionary };
