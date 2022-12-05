import { FC } from 'react';

import { AppLocale } from '@project-management-app/types';

import { Separator } from './components/components';
import {
  AdvantagesSection,
  HeroSection,
  TechnologiesSection,
  OurTeamSection,
} from './sections/sections';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const HomePage: FC<Props> = ({ params }) => {
  const { locale } = params;

  return (
    <>
      <HeroSection locale={locale} />
      <AdvantagesSection locale={locale} />
      <Separator />
      <TechnologiesSection locale={locale} />
      <Separator />
      <OurTeamSection locale={locale} />
    </>
  );
};

export default HomePage;
