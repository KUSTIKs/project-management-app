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
            'Set up a reliable project structure with clear and clean code, organized CI/CD',
        },
        {
          title: 'Functionality',
          description:
            'Implemented functionality with readable and easy-to-understand code using best practices and design patterns',
        },
        {
          title: 'Accessibility',
          description:
            'Added support for four languages: English, Russian, Ukrainian and Czech',
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
            'Задал надежную структуру проекта с понятным и чистым кодом, организовал CI/CD',
        },
        {
          title: 'Функционал',
          description:
            'Реализовал функциональность с читаемым и легким для понимания кодом, использующим лучшие практики и шаблоны проектирования',
        },
        {
          title: 'Доступность',
          description:
            'Добавил поддержку четырёх языков: английского, русского, украинского и чешского',
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
            'Задав надійну структуру проєкту зі зрозумілим і чистим кодом, організував CI / CD',
        },
        {
          title: 'Функціонал',
          description:
            'Реалізував функціональність з читабельним і легким для розуміння кодом, що використовує кращі практики та шаблони проєктування',
        },
        {
          title: 'Доступність',
          description:
            'Додав підтримку чотирьох мов: англійської, російської, української та чеської',
        },
      ],
    },
  },
  [LocaleName.CS]: {
    title: 'Náš tým',
    member1: {
      name: 'Artem Khvostyk',
      description: 'Vývojář, designér',
      statements: [
        {
          title: 'Design',
          description:
            'Vytvořil uživatelsky přívětivé rozhraní pomocí nejnovějších inovací v figma',
        },
        {
          title: 'Architektura',
          description:
            'Vytvořil spolehlivou strukturu projektu s jasným a čistým kódem, organizoval CI / CD',
        },
        {
          title: 'Funkcionalita',
          description:
            'Implementoval funkčnost s čitelným a snadno srozumitelným kódem pomocí osvědčených postupů a návrhových vzorů',
        },
        {
          title: 'Dostupnost',
          description:
            'Přidal podporu pro čtyři jazyky: angličtinu, ruštinu, ukrajinštinu a češtinu',
        },
      ],
    },
  },
});

export { ourTeamDictionary };
