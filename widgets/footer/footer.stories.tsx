import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LocaleName } from '@project-management-app/enums';

import { Footer } from './footer';

const componentMeta: ComponentMeta<typeof Footer> = {
  title: 'Widgets/Footer',
  component: Footer,
  args: {
    locale: LocaleName.EN,
  },
};

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

const Default = Template.bind({});
Default.storyName = 'Footer';

export default componentMeta;
export { Default };
