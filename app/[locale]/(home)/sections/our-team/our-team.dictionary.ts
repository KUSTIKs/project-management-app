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
          title: 'Quisque nunc enim',
          description:
            'Egestas proin et consequat aliquet purus sed massa. Et ipsum elit dui nibh in ultrices tristique cras suspendisse.',
        },
        {
          title: 'Tellus quam tempus',
          description:
            'Accumsan vulputate proin nulla morbi rhoncus. Sit donec nulla facilisis orci est erat tortor felis. Vestibulum ultricies ut cras viverra ut.',
        },
        {
          title: 'Purus nisl nulla',
          description:
            'Aliquam aliquam faucibus vitae risus hac scelerisque posuere. Malesuada quis vitae bibendum euismod adipiscing nisl. Volutpat massa fringilla nunc feugiat scelerisque odio commodo et.',
        },
        {
          title: 'Eget aenean',
          description:
            'Augue scelerisque posuere turpis enim viverra malesuada ipsum. Mattis non nisi pretium bibendum. Suscipit at eget vitae amet ut nunc eu eget adipiscing.',
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
          title: 'Я сейчас плачу',
          description:
            'Приморский край, прежде всего, немного перебор. Кусочки были брошены в ультразвуковую суспензию дерьма.',
        },
        {
          title: 'Телус',
          description:
            'Аккерман, никакой "рапсодии Ронды" не было. Пожертвовать liquid orchestra был крутым ублюдком. Ультразвуковая одежда выживет.',
        },
        {
          title: 'Пурус ничто',
          description:
            'Есть смех, когда я могу посмеяться над ним. Я хотел знать, что случилось с "ниссаном". Слишком много кафе прямо сейчас, я ненавидел композитора.',
        },
        {
          title: 'Эней',
          description:
            'Индюки могут видеть худшее, худшее будет пропущено. У Мэтта не было жука. Прямо сейчас я все еще нахожусь под влиянием своей собственной зависимости.',
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
          title: ' я зараз плачу',
          description:
            'В першу чергу, це трохи перебір. Шматки кидали в ультразвукову суспензію лайна.',
        },
        {
          title: 'Телус',
          description:
            'Аккерман, рапсодії Ронди не було. Нічого не жертвуйте, щоб полегшити Феліксу. Ультразвуковий одяг виживе.',
        },
        {
          title: 'Пурус ніщо',
          description:
            'Є сміх, коли я можу посміятися над ним. Я хотів знати, що сталося з Ніссаном. Занадто багато кафе прямо зараз, я ненавидів композитора.',
        },
        {
          title: 'Еней',
          description:
            'Індики можуть бачити найгірше, найгірше буде пропущено. У Метта не було жука. Зараз я все ще перебуваю під впливом власної залежності',
        },
      ],
    },
  },
});

export { ourTeamDictionary };
