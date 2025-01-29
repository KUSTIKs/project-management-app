import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { AppLink, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import * as images from '@project-management-app/images';

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
          src={images.BooksImg}
          alt="books"
          className={classNames(classes.illustration, 'invertible')}
        />
      </div>
      <div className={classes.technologiesWrapper}>
        <AppLink href="https://reactjs.org" className={classes.technologyCard}>
          <Image
            src={images.ReactLogoImg}
            alt="react"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink
          href="https://typescript.org"
          className={classes.technologyCard}
        >
          <Image
            src={images.TypescriptLogoImg}
            alt="typescript"
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink href="https://nextjs.org" className={classes.technologyCard}>
          <Image
            src={images.NextLogoImg}
            alt="next"
            className={classNames(classes.technologyImage, 'invertible')}
          />
        </AppLink>
        <AppLink
          href="https://react-hook-form.com"
          className={classes.technologyCard}
        >
          <Image
            src={images.ReactHookFormLogoImg}
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
            src={images.ReactQueryLogoImg}
            alt="react query"
          />
        </AppLink>
        <AppLink
          href="https://storybook.js.org"
          className={classes.technologyCard}
        >
          <Image
            className={classes.technologyImage}
            src={images.StorybookLogoImg}
            alt="storybook"
          />
        </AppLink>
        <AppLink
          href="https://www.framer.com/motion/"
          className={classes.technologyCard}
        >
          <Image
            className={classes.technologyImage}
            src={images.FramerMotionLogoImg}
            alt="framer motion"
          />
        </AppLink>
      </div>
    </section>
  );
};

export { TechnologiesSection };
