import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '@project-management-app/components';

import { UpdateEntityModal } from './update-entity-modal';

const componentMeta: ComponentMeta<typeof UpdateEntityModal> = {
  title: 'Modals/UpdateEntityModal',
  component: UpdateEntityModal,
  argTypes: {
    handleClose: {
      action: 'close',
    },
    handleUpdate: {
      action: 'update',
    },
    children: {
      table: {
        disable: true,
      },
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
    children: (
      <>
        <Typography variant="headline">Content</Typography>
      </>
    ),
  },
};

const Template: ComponentStory<typeof UpdateEntityModal> = (args) => (
  <UpdateEntityModal {...args} />
);

const Default = Template.bind({});
Default.storyName = 'UpdateEntityModal';

export default componentMeta;
export { Default };
