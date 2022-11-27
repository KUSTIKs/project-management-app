import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconBaseProps } from 'react-icons';

import { Icon } from './icon';

const IconPreview: FC<{ iconName: keyof typeof Icon } & IconBaseProps> = ({
  iconName,
  ...iconProps
}) => {
  const Preview = Icon[iconName];
  return <Preview {...iconProps} />;
};

const componentMeta: ComponentMeta<typeof IconPreview> = {
  title: 'Icon',
  component: IconPreview,
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(Icon),
    },
  },
};

const Template: ComponentStory<typeof IconPreview> = (args) => (
  <IconPreview {...args} />
);

const Default = Template.bind({});
Default.storyName = 'Icon';
Default.args = {
  iconName: 'BinLine',
  size: 20,
};

export default componentMeta;
export { Default };
