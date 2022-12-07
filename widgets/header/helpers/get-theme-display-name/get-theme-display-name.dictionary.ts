import { LocaleName } from '@project-management-app/enums';
import { ContentDictionary } from '@project-management-app/helpers';

const getThemeDisplayNameDictionary = new ContentDictionary({
  [LocaleName.EN]: {
    dark: 'Dark',
    light: 'Light',
    system: 'System',
  },
  [LocaleName.RU]: {
    dark: 'Тёмная',
    light: 'Светлая',
    system: 'Системная',
  },
  [LocaleName.UK]: {
    dark: 'Темна',
    light: 'Світла',
    system: 'Системна',
  },
  [LocaleName.CS]: {
    dark: 'Tmavé',
    light: 'Světlé',
    system: 'Systémové',
  },
});

export { getThemeDisplayNameDictionary };
