import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './header';

const componentMeta: ComponentMeta<typeof Header> = {
  title: 'Widgets/Header',
  component: Header,
};

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

const Authorized = Template.bind({});
Authorized.args = {
  isAuthorized: true,
};

const Unauthorized = Template.bind({});
Unauthorized.args = {
  isAuthorized: false,
};

export default componentMeta;
export { Authorized, Unauthorized };
