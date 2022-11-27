import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DeleteEntityModal } from './delete-entity-modal';

const componentMeta: ComponentMeta<typeof DeleteEntityModal> = {
  title: 'Modals/DeleteEntityModal',
  component: DeleteEntityModal,
  argTypes: {
    handleClose: {
      action: 'close',
    },
    handleDelete: {
      action: 'delete',
    },
    errorMessage: {
      type: 'string',
    },
  },
  args: {
    isOpen: false,
    isLoading: false,
    entityName: 'Entity',
    isActionDisabled: false,
    isError: false,
    withQuotes: true,
  },
};

const Template: ComponentStory<typeof DeleteEntityModal> = (args) => (
  <DeleteEntityModal {...args} />
);

const Default = Template.bind({});
Default.storyName = 'DeleteEntityModal';

export default componentMeta;
export { Default };
