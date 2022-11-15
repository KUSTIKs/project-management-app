/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@project-management-app/components';

import classes from './technologies.module.scss';

const Technologies: FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.topInfo}>
        <Typography
          variant="largeTitle2"
          weight={700}
          style={{ maxWidth: 500 }}
        >
          Build with the most reliable technologies
        </Typography>
        <Image src="/books.png" alt="books" height={90} width={150} />
      </div>
      <div className={classes.technologiesWrapper}>
        <Link href="https://reactjs.org" className={classes.technologyCard}>
          <img
            src="/react-logo.png"
            alt="react"
            className={classes.technologyImage}
          />
        </Link>
        <Link href="https://nextjs.org" className={classes.technologyCard}>
          <img
            src="/next-logo.png"
            alt="next"
            className={classes.technologyImage}
          />
        </Link>
        <Link
          href="https://react-hook-form.com"
          className={classes.technologyCard}
        >
          <img
            src="/react-hook-form-logo.png"
            alt="react hook form"
            className={classes.technologyImage}
          />
        </Link>
        <Link
          href="https://tanstack.com/query/v4"
          className={classes.technologyCard}
        >
          <img
            src="/react-query-logo.png"
            alt="react query"
            className={classes.technologyImage}
          />
        </Link>
        <Link href="https://redux.js.org" className={classes.technologyCard}>
          <img
            src="/redux-logo.png"
            alt="redux"
            className={classes.technologyImage}
          />
        </Link>
      </div>
    </section>
  );
};

export { Technologies };
