import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const heroDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'Magic project manager',
    description: 'Finally, a simple tool for process and project management',
    tryNow: 'Try now free',
    projectRepo: 'Project repo',
  },
  [LocaleName.RU]: {
    title: 'Magic project manager',
    description:
      'Наконец, простой инструмент для управления процессами и проектами',
    tryNow: 'Начни сейчас',
    projectRepo: 'Репозиторий',
  },
  [LocaleName.UK]: {
    title: 'Magic project manager',
    description:
      'Нарешті, простий інструмент для управління процесами та проектами',
    tryNow: 'Спробуйте зараз',
    projectRepo: 'Репозиторій',
  },
});

export { heroDictionary };
