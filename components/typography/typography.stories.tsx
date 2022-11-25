import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './typography';

const componentMeta: ComponentMeta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  args: {
    variant: 'text',
    children: 'Typography',
  },
};

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

const Default = Template.bind({});

export default componentMeta;
export { Default };
