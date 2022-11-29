import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const advantagesDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    advantage1: {
      title: 'Organize work',
      description:
        'Flexible kanban boards help teams visualize their workflow, limit work-in-progress, and maximize efficiency as a team',
    },
    advantage2: {
      title: 'Make work visible',
      description: 'Track work through an open, collaborative platform',
    },
  },
  [LocaleName.RU]: {
    advantage1: {
      title: 'Организуйте работу',
      description:
        'Гибкие доски канбан помогают командам визуализировать свой рабочий процесс, ограничивать количество незавершенных работ и повышать эффективность работы всей команды',
    },
    advantage2: {
      title: 'Сделайте работу видимой',
      description:
        'Отслеживайте работу с помощью открытой платформы для совместной работы',
    },
  },
  [LocaleName.UK]: {
    advantage1: {
      title: 'Організуйте роботу',
      description:
        'Гнучкі канбан дошки допомагають командам візуалізувати свій робочий процес, обмежувати кількість незавершених робіт і підвищувати ефективність роботи всієї команди',
    },
    advantage2: {
      title: 'Зробіть роботу видимою',
      description:
        'Відстежуйте роботу за допомогою відкритої платформи для спільної роботи',
    },
  },
  [LocaleName.CS]: {
    advantage1: {
      title: 'Uspořádejte práci',
      description:
        'Flexibilní kanbanové desky pomáhají týmům vizualizovat tento pracovní postup, omezují probíhající práci a maximalizují efektivitu jako tým',
    },
    advantage2: {
      title: 'Zviditelněte práci',
      description:
        'Sledujte práci prostřednictvím otevřené platformy pro spolupráci',
    },
  },
});

export { advantagesDictionary };
