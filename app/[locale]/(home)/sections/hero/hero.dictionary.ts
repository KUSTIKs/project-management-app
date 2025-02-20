import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const heroDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'Magic project manager',
    description: 'Finally, a simple tool for process and project management',
    tryNow: 'Try now free',
    goToBoards: 'Go to boards',
    projectRepo: 'Project repo',
  },
  [LocaleName.RU]: {
    title: 'Magic project manager',
    description:
      'Наконец, простой инструмент для управления процессами и проектами',
    tryNow: 'Начни сейчас',
    goToBoards: 'Перейти к доскам',
    projectRepo: 'Репозиторий',
  },
  [LocaleName.UK]: {
    title: 'Magic project manager',
    description:
      'Нарешті, простий інструмент для управління процесами та проектами',
    tryNow: 'Спробуйте зараз',
    goToBoards: 'Перейти до дощок',
    projectRepo: 'Репозиторій',
  },
  [LocaleName.CS]: {
    title: 'Magic project manager',
    description: 'Konečně jednoduchý nástroj pro řízení procesů a projektů',
    tryNow: 'Vyzkoušejte nyní',
    goToBoards: 'Přejít na desky',
    projectRepo: 'Repo projektu',
  },
});

export { heroDictionary };
