import '../styles/global-styles.scss';
import { AppContextProvider } from '../components/components';

export const decorators = [
  (Story) => (
    <>
      <AppContextProvider locale="en">
        <Story />
      </AppContextProvider>
      <div id="modal-portal" />
    </>
  ),
];
