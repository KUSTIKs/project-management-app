import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PasswordInput } from './password-input';

const componentMeta: ComponentMeta<typeof PasswordInput> = {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
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

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
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
