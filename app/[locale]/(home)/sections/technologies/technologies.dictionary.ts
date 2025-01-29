import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const technologiesDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'Technologies',
    subtitle: 'Built with the most reliable technologies',
  },
  [LocaleName.RU]: {
    title: 'Технологии',
    subtitle: 'Создано с использованием самых надежных технологий',
  },
  [LocaleName.UK]: {
    title: 'Технології',
    subtitle: 'Створено з використанням найнадійніших технологій',
  },
  [LocaleName.CS]: {
    title: 'Technologie',
    subtitle: 'Vytvořeno pomocí nejspolehlivějších technologií',
  },
});

export { technologiesDictionary };
