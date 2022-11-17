/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';

import { AppLink, Typography } from '@project-management-app/components';

import classes from './technologies.module.scss';

const Technologies: FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.topInfo}>
        <div>
          <Typography
            variant="largeTitle2"
            weight={700}
            style={{ marginBottom: 5 }}
          >
            Technologies
          </Typography>
          <Typography variant="largeHeadline" weight={500} colorName="text/600">
            Build with the most reliable technologies
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

export { Technologies };
