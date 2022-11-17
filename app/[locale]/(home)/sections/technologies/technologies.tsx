/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';

import { AppLink, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from './technologies.module.scss';
import { technologiesDictionary } from './technologies.dictionary';

type Props = {
  locale: AppLocale;
};

const TechnologiesSection: FC<Props> = ({ locale }) => {
  const contentMap = technologiesDictionary.getContentMap(locale);

  return (
    <section className={classes.container}>
      <div className={classes.topInfo}>
        <div>
          <Typography
            variant="largeTitle2"
            weight={700}
            style={{ marginBottom: 5 }}
          >
            {contentMap.title}
          </Typography>
          <Typography variant="largeHeadline" weight={500} colorName="text/600">
            {contentMap.subtitle}
          </Typography>
        </div>
        <Image src="/books.png" alt="books" height={90} width={150} />
      </div>
      <div className={classes.technologiesWrapper}>
        <AppLink href="https://reactjs.org" className={classes.technologyCard}>
          <img
            src="/react-logo.png"
            alt="react"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink href="https://nextjs.org" className={classes.technologyCard}>
          <img
            src="/next-logo.png"
            alt="next"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink
          href="https://react-hook-form.com"
          className={classes.technologyCard}
        >
          <img
            src="/react-hook-form-logo.png"
            alt="react hook form"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink
          href="https://tanstack.com/query/v4"
          className={classes.technologyCard}
        >
          <img
            src="/react-query-logo.png"
            alt="react query"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink href="https://redux.js.org" className={classes.technologyCard}>
          <img
            src="/redux-logo.png"
            alt="redux"
            className={classes.technologyImage}
          />
        </AppLink>
      </div>
    </section>
  );
};

export { TechnologiesSection };
