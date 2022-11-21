import { FC } from 'react';
import Image from 'next/image';

import { Button, Icon, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from './hero.module.scss';
import { heroDictionary } from './hero.dictionary';

type Props = {
  locale: AppLocale;
};

const HeroSection: FC<Props> = ({ locale }) => {
  const contentMap = heroDictionary.getContentMap({ locale });

  return (
    <section className={classes.container}>
      <div className={classes.info}>
        <Typography variant="largeTitle1" weight={800}>
          {contentMap.title}
        </Typography>
        <Typography variant="largeHeadline" weight={500} colorName="text/700">
          {contentMap.description}
        </Typography>
        <div className={classes.buttonGroup}>
          <Button href="/boards">{contentMap.tryNow}</Button>
          <Button
            variant="ghost"
            startIcon={<Icon.GithubFill />}
            href="https://github.com/KUSTIKs/project-management-app"
          >
            {contentMap.projectRepo}
          </Button>
        </div>
      </div>
      <Image
        src="/images/home-illustration.avif"
        alt="home illustration"
        height={350}
        width={520}
        className={classes.image}
        priority
      />
    </section>
  );
};

export { HeroSection };
