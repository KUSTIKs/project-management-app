import { FC } from 'react';

import { Separator } from './components/components';
import { Advantages, Hero, Technologies, OurTeam } from './sections/sections';

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <Separator />
      <Technologies />
      <Separator />
      <OurTeam />
    </>
  );
};

export default Home;
