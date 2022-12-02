import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { AppLink, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import BooksImg from '@project-management-app/images/books.png';
import ReactLogoImg from '@project-management-app/images/react-logo.png';
import TypescriptLogoImg from '@project-management-app/images/typescript-logo.png';
import NextLogoImg from '@project-management-app/images/next-logo.png';
import ReactHookFormLogoImg from '@project-management-app/images/react-hook-form-logo.png';
import ReactQueryLogoImg from '@project-management-app/images/react-query-logo.png';
import StorybookLogoImg from '@project-management-app/images/storybook-logo.png';
import FramerMotionLogoImg from '@project-management-app/images/framer-motion-logo.png';

import classes from './technologies.module.scss';
import { technologiesDictionary } from './technologies.dictionary';

type Props = {
  locale: AppLocale;
};

const TechnologiesSection: FC<Props> = ({ locale }) => {
  const contentMap = technologiesDictionary.getContentMap({ locale });

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
        <Image
          src={BooksImg}
          alt="books"
          className={classNames(classes.illustration, 'invertible')}
        />
      </div>
      <div className={classes.technologiesWrapper}>
        <AppLink href="https://reactjs.org" className={classes.technologyCard}>
          <Image
            src={ReactLogoImg}
            alt="react"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink
          href="https://typescript.org"
          className={classes.technologyCard}
        >
          <Image
            src={TypescriptLogoImg}
            alt="typescript"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink href="https://nextjs.org" className={classes.technologyCard}>
          <Image
            src={NextLogoImg}
            alt="next"
            className={classNames(classes.technologyImage, 'invertible')}
          />
        </AppLink>
        <AppLink
          href="https://react-hook-form.com"
          className={classes.technologyCard}
        >
          <Image
            src={ReactHookFormLogoImg}
            alt="react hook form"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink
          href="https://tanstack.com/query/v4"
          className={classes.technologyCard}
        >
          <Image
            className={classes.technologyImage}
            src={ReactQueryLogoImg}
            alt="react query"
          />
        </AppLink>
        <AppLink
          href="https://storybook.js.org"
          className={classes.technologyCard}
        >
          <Image
            className={classes.technologyImage}
            src={StorybookLogoImg}
            alt="storybook"
          />
        </AppLink>
        <AppLink
          href="https://www.framer.com/motion/"
          className={classes.technologyCard}
        >
          <Image
            className={classes.technologyImage}
            src={FramerMotionLogoImg}
            alt="framer motion"
          />
        </AppLink>
      </div>
    </section>
  );
};

export { TechnologiesSection };
