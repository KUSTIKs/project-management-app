/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';

import { Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from './advantages.module.scss';
import { advantagesDictionary } from './advantages.dictionary';

type Props = {
  locale: AppLocale;
};

const AdvantagesSection: FC<Props> = ({ locale }) => {
  const contentMap = advantagesDictionary.getContentMap(locale);

  return (
    <section className={classes.container}>
      <div className={classes.advantage}>
        <img
          src="/images/boards-page-screenshot.png"
          alt="boards page"
          className={classes.advantageImage}
        />
        <div className={classes.advantageInfo}>
          <Image
            src="/images/advantage-1.avif"
            alt="advantage"
            height={60}
            width={90}
            className={classes.advantageInfoImage}
          />
          <div>
            <Typography variant="largeTitle3" weight={600}>
              {contentMap.advantage2.title}
            </Typography>
            <Typography variant="text" weight={500} colorName="text/400">
              {contentMap.advantage2.description}
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.advantage}>
        <img
          src="/images/board-page-screenshot.png"
          alt="board detail page"
          className={classes.advantageImage}
        />
        <div className={classes.advantageInfo}>
          <Image
            src="/images/advantage-2.avif"
            alt="advantage"
            height={60}
            width={90}
            className={classes.advantageInfoImage}
          />
          <div>
            <Typography variant="largeTitle3" weight={600}>
              {contentMap.advantage1.title}
            </Typography>
            <Typography variant="text" weight={500} colorName="text/400">
              {contentMap.advantage1.description}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AdvantagesSection };
