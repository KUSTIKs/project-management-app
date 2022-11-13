import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './button';
import { Icon } from '../icon/icon';

const iconNameArgType = {
  control: 'select',
  options: Object.keys(Icon).concat('undefined'),
  defaultValue: 'undefined',
};

const componentMeta: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
    size: {
      control: 'radio',
      options: ['s', 'm', 'l'],
      defaultValue: 'm',
    },
    variant: {
      control: 'radio',
      options: ['contained', 'ghost', 'text'],
    },
    endIcon: iconNameArgType,
    startIcon: iconNameArgType,
  },
};

const Template: ComponentStory<typeof Button> = ({
  endIcon,
  startIcon,
  ...args
}) => {
  const StartIcon = Icon[startIcon as unknown as keyof typeof Icon];
  const EndIcon = Icon[endIcon as unknown as keyof typeof Icon];

  return (
    <Button
      startIcon={StartIcon && <StartIcon />}
      endIcon={EndIcon && <EndIcon />}
      {...args}
    />
  );
};

const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  startIcon: <Icon.BinLine />,
};

const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  startIcon: <Icon.BinLine />,
};

const Text = Template.bind({});
Text.args = {
  variant: 'text',
  startIcon: <Icon.BinLine />,
};

export default componentMeta;
export { Contained, Ghost, Text };
