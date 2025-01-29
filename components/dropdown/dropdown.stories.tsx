import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, Icon, Options } from '@project-management-app/components';

import { Dropdown } from './dropdown';

const componentMeta: ComponentMeta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    trigger: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: (
      <Options
        handleChange={() => {}}
        options={[
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
        ]}
      />
    ),
  },
};

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const Default = Template.bind({});
Default.storyName = 'Dropdown';
Default.args = {
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
