import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from './text-input';

const componentMeta: ComponentMeta<typeof TextInput> = {
  title: 'Inputs/TextInput',
  component: TextInput,
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

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
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
