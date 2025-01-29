import { useContext } from 'react';

import { AppContext } from '@project-management-app/helpers';

const useAppContext = () => useContext(AppContext);

export { useAppContext };
