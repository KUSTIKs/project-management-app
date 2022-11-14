import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from './footer';

const componentMeta: ComponentMeta<typeof Footer> = {
  title: 'Widgets/Footer',
  component: Footer,
};

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

const Default = Template.bind({});

export default componentMeta;
export { Default };
