import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const ourTeamDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    title: 'Our team',
    member1: {
      name: 'Artem Khvostyk',
      description: 'Developer, designer',
      statements: [
        {
          title: 'Design',
          description:
            'Created a user-friendly interface using the latest innovations in figma',
        },
        {
          title: 'Architecture',
          description:
            'Created a reliable project structure with clear and clean code, organized CI/CD',
        },
        {
          title: 'Functionality',
          description:
            'Implemented functionality with readable and easy-to-understand code using best practices and design patterns',
        },
        {
          title: 'Accessibility',
          description:
            'Added support for three languages: English, Russian and Ukrainian',
        },
      ],
    },
  },
  [LocaleName.RU]: {
    title: 'Наша команда',
    member1: {
      name: 'Артём Хвостик',
      description: 'Разработчик, дизайнер',
      statements: [
        {
          title: 'Дизайн',
          description:
            'Создал удобный интерфейс с использованием последних инноваций в figma',
        },
        {
          title: 'Архитектура',
          description:
            'Создал надежную структуру проекта с понятным и чистым кодом. Организовал CI/CD',
        },
        {
          title: 'Функционал',
          description:
            'Реализовал функциональность с читаемым и легким для понимания кодом, использующим лучшие практики и шаблоны проектирования',
        },
        {
          title: 'Доступность',
          description:
            'Добавил поддержка трех языков: английского, русского и украинского',
        },
      ],
    },
  },
  [LocaleName.UK]: {
    title: 'Наша команда',
    member1: {
      name: 'Артем Хвостик',
      description: 'Розробник, дизайнер',
      statements: [
        {
          title: 'Дизайн',
          description:
            'Створив зручний інтерфейс з використанням останніх інновацій в figma',
        },
        {
          title: 'Архітектура',
          description:
            'Створив надійну структуру проекту зі зрозумілим і чистим кодом. Організував CI / CD',
        },
        {
          title: 'Функціонал',
          description:
            'Реалізував функціональність з читабельним і легким для розуміння кодом, що використовує кращі практики та шаблони проєктування',
        },
        {
          title: 'Доступність',
          description:
            'Додав підтримка трьох мов: англійської, російської та української',
        },
      ],
    },
  },
});

export { ourTeamDictionary };
