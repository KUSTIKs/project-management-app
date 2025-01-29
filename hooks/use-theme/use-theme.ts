import { useContext } from 'react';

import { ThemeContext } from '@project-management-app/helpers';

const useTheme = () => useContext(ThemeContext);

export { useTheme };
