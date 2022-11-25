import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '@project-management-app/components';

import { ActionModal } from './action-modal';

const componentMeta: ComponentMeta<typeof ActionModal> = {
  title: 'Components/Modals/ActionModal',
  component: ActionModal,
  argTypes: {
    handleClose: {
      action: 'close',
    },
    handleAction: {
      action: 'action',
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
    actionName: 'Action',
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

const Template: ComponentStory<typeof ActionModal> = (args) => (
  <ActionModal {...args} />
);

const Default = Template.bind({});

export default componentMeta;
export { Default };
