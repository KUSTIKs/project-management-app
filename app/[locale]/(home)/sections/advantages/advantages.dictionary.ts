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
    advantage3: {
      title: 'Navigate fast',
      description:
        'Find what you need as quickly and easily as possible. Navigate through all tasks and boards in one widget',
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
    advantage3: {
      title: 'Орентируйтесь быстро',
      description:
        'Находите то, что вам нужно, как можно быстрее и проще. Навигация по всем задачам и доскам в одном виджете',
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
    advantage3: {
      title: 'Орієнтуйтеся швидко',
      description:
        'Знаходьте те, що вам потрібно, якомога швидше і простіше. Навігація по всіх завданнях і дошках в одному віджеті',
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
    advantage3: {
      title: 'Navigujte rychle',
      description:
        'Najděte, co potřebujete, co nejrychleji a nejsnadněji. Navigace ve všech úkolech a deskách v jednom widgetu',
    },
  },
});

export { advantagesDictionary };
