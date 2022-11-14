import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Icon } from '@project-management-app/components';

import { Dropdown } from './dropdown';

const componentMeta: ComponentMeta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    direction: {
      control: 'radio',
      options: ['up', 'down', 'left', 'right'],
      defaultValue: 'down',
    },
    alignment: {
      control: 'radio',
      options: ['start', 'end'],
      defaultValue: 'end',
    },
    handleChange: {
      table: {
        disable: true,
      },
    },
    trigger: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const Default = Template.bind({});
Default.args = {
  handleChange() {},
  options: [
    'Antarctica',
    'Togo',
    'Albania',
    'Norfolk Island',
    'Ecuador',
    'French Polynesia',
    'Malawi',
    'Bhutan',
    'Guinea',
    'South Georgia & South Sandwich Islands',
    'Vanuatu',
    'Equatorial Guinea',
    'Saudi Arabia',
    'Antarctica',
    'Argentina',
  ],
  trigger: (
    <Button variant="ghost" size="m" startIcon={<Icon.GlobalLine />}>
      Country
    </Button>
  ),
};

export default componentMeta;
export { Default };
