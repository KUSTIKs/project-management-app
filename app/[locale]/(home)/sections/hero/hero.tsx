'use client';

import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Button, Icon, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import { useAppContext } from '@project-management-app/hooks';
import { HomeHeroIllustrationImg } from '@project-management-app/images';

import classes from './hero.module.scss';
import { heroDictionary } from './hero.dictionary';

type Props = {
  locale: AppLocale;
};

const HeroSection: FC<Props> = ({ locale }) => {
  const contentMap = heroDictionary.getContentMap({ locale });
  const { isAuthorized } = useAppContext();

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
          {isAuthorized ? (
            <Button href="/boards">{contentMap.goToBoards}</Button>
          ) : (
            <Button href="/sign-in">{contentMap.tryNow}</Button>
          )}
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
        src={HomeHeroIllustrationImg}
        alt="home illustration"
        className={classNames(classes.image, 'invertible')}
        priority
      />
    </section>
  );
};

export { HeroSection };
