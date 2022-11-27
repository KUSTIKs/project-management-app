import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '@project-management-app/components';

import { Modal } from './modal';

const componentMeta: ComponentMeta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    handleClose: {
      action: 'close',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    isOpen: false,
    isDisabled: false,
    title: 'Modal',
    children: (
      <>
        <Typography variant="headline">Content</Typography>
      </>
    ),
  },
};

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const Default = Template.bind({});
Default.storyName = 'Modal';

export default componentMeta;
export { Default };
