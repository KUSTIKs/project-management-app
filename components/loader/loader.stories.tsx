import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './loader';

const componentMeta: ComponentMeta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  args: {
    size: 24,
  },
};

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

const Default = Template.bind({});

export default componentMeta;
export { Default };
