import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { AppLink, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

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
          src="/images/books.png"
          alt="books"
          height={90}
          width={150}
          className={classes.illustration}
        />
      </div>
      <div className={classes.technologiesWrapper}>
        <AppLink href="https://reactjs.org" className={classes.technologyCard}>
          <Image
            src="/images/react-logo.png"
            alt="react"
            height={50}
            width={200}
            className={classes.technologyImage}
          />
        </AppLink>
        <AppLink
          href="https://typescript.org"
          className={classes.technologyCard}
        >
          <Image
            src="/images/typescript-logo.png"
            alt="typescript"
            className={classes.technologyImage}
            height={50}
            width={200}
          />
        </AppLink>
        <AppLink href="https://nextjs.org" className={classes.technologyCard}>
          <Image
            src="/images/next-logo.png"
            alt="next"
            className={classNames(classes.technologyImage, classes.invertible)}
            height={50}
            width={200}
          />
        </AppLink>
        <AppLink
          href="https://react-hook-form.com"
          className={classes.technologyCard}
        >
          <Image
            src="/images/react-hook-form-logo.png"
            alt="react hook form"
            className={classes.technologyImage}
            height={50}
            width={200}
          />
        </AppLink>
        <AppLink
          href="https://tanstack.com/query/v4"
          className={classes.technologyCard}
        >
          <Image
            className={classes.technologyImage}
            src="/images/react-query-logo.png"
            alt="react query"
            height={50}
            width={200}
          />
        </AppLink>
        <AppLink
          href="https://storybook.js.org"
          className={classes.technologyCard}
        >
          <Image
            className={classes.technologyImage}
            src="/images/storybook-logo.png"
            alt="storybook"
            height={50}
            width={200}
          />
        </AppLink>
        <AppLink
          href="https://www.framer.com/motion/"
          className={classes.technologyCard}
        >
          <Image
            className={classes.technologyImage}
            src="/images/framer-motion-logo.png"
            alt="framer motion"
            height={50}
            width={200}
          />
        </AppLink>
      </div>
    </section>
  );
};

export { TechnologiesSection };
