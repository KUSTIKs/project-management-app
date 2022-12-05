import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const taskModalsDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'title',
    description: 'description',
    assignee: 'assignee',
    attachments: 'attachments',
    attach: 'Attach',
    createTask: 'Create task',
    updateTask: 'Update task',
    deleteTask: 'Delete task',
    infoTask: 'Task info',
  },
  [LocaleName.RU]: {
    title: 'заголовок',
    description: 'описание',
    assignee: 'исполнитель',
    attachments: 'вложения',
    attach: 'Прикрепить',
    createTask: 'Создать задание',
    updateTask: 'Обновить задание',
    deleteTask: 'Удалить задание',
    infoTask: 'Информация о задании',
  },
  [LocaleName.UK]: {
    title: 'заголовок',
    description: 'опис',
    assignee: 'виконавець',
    attachments: 'вкладення',
    attach: 'Прикріпити',
    createTask: 'Створити завдання',
    updateTask: 'Оновити завдання',
    deleteTask: 'Видалити завдання',
    infoTask: 'Інформація про завдвння',
  },
  [LocaleName.CS]: {
    title: 'titulek',
    description: 'popis',
    assignee: 'vykonávající',
    attachments: 'přílohy',
    attach: 'Připojit',
    deleteTask: 'Smazat úkol',
    createTask: 'Vytvořit úkol',
    updateTask: 'Aktualizovat úkol',
    infoTask: 'Informace o úkolu',
  },
});

export { taskModalsDictionary };
