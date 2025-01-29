import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextPreview } from './text-preview';

const componentMeta: ComponentMeta<typeof TextPreview> = {
  title: 'Inputs/TextPreview',
  component: TextPreview,
  args: {
    label: 'Label',
    children: 'value',
  },
};

const Template: ComponentStory<typeof TextPreview> = (args) => (
  <TextPreview {...args} />
);

const Default = Template.bind({});
Default.storyName = 'TextPreview';

export default componentMeta;
export { Default };
