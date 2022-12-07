import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './select';

const componentMeta: ComponentMeta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  argTypes: {
    errorMessage: {
      control: 'text',
    },
    variant: {
      control: 'radio',
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    label: 'Label',
    required: false,
    isError: false,
    defaultValue: 'Option 1',
    children: (
      <>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
      </>
    ),
  },
};

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

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
