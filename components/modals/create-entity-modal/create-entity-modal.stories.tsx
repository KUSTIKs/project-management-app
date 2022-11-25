import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '@project-management-app/components';

import { CreateEntityModal } from './create-entity-modal';

const componentMeta: ComponentMeta<typeof CreateEntityModal> = {
  title: 'Components/Modals/CreateEntityModal',
  component: CreateEntityModal,
  argTypes: {
    handleClose: {
      action: 'close',
    },
    handleCreate: {
      action: 'create',
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

const Template: ComponentStory<typeof CreateEntityModal> = (args) => (
  <CreateEntityModal {...args} />
);

const Default = Template.bind({});

export default componentMeta;
export { Default };
