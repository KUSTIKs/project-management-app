import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Icon } from '@project-management-app/components';

import { Dropdown } from './dropdown';

const componentMeta: ComponentMeta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    handleChange: {
      table: {
        disable: true,
      },
      action: 'Changed',
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
    <Button
      variant="ghost"
      size="m"
      startIcon={<Icon.GlobalLine />}
      endIcon={<Icon.ArrowDropDownLine />}
    >
      Country
    </Button>
  ),
  alignment: 'start',
  direction: 'down',
};

export default componentMeta;
export { Default };
