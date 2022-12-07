import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextArea } from './text-area';

const componentMeta: ComponentMeta<typeof TextArea> = {
  title: 'Inputs/TextArea',
  component: TextArea,
  argTypes: {
    errorMessage: {
      control: 'text',
    },
    variant: {
      control: 'radio',
    },
  },
  args: {
    label: 'Label',
    defaultValue: 'value',
    required: false,
    isError: false,
  },
};

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

const Unfilled = Template.bind({});
Unfilled.args = {
  variant: 'unfilled',
};

export default componentMeta;
export { Filled, Unfilled };
