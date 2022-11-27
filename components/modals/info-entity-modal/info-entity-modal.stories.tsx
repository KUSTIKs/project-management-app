import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '@project-management-app/components';

import { InfoEntityModal } from './info-entity-modal';

const componentMeta: ComponentMeta<typeof InfoEntityModal> = {
  title: 'Modals/InfoEntityModal',
  component: InfoEntityModal,
  argTypes: {
    handleClose: {
      action: 'close',
    },
    handleDeleteClick: {
      action: 'delete',
    },
    handleUpdateClick: {
      action: 'update',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    title: 'Entity details',
    isOpen: false,
    children: (
      <>
        <Typography variant="headline">Content</Typography>
      </>
    ),
  },
};

const Template: ComponentStory<typeof InfoEntityModal> = (args) => (
  <InfoEntityModal {...args} />
);

const Default = Template.bind({});
Default.storyName = 'InfoEntityModal';

export default componentMeta;
export { Default };
