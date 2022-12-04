'use client';

import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import { useTheme } from '@project-management-app/hooks';
import { ThemeName } from '@project-management-app/enums';
import * as images from '@project-management-app/images';

import classes from './advantages.module.scss';
import { advantagesDictionary } from './advantages.dictionary';

type Props = {
  locale: AppLocale;
};

const AdvantagesSection: FC<Props> = ({ locale }) => {
  const contentMap = advantagesDictionary.getContentMap({ locale });
  const { resolvedTheme } = useTheme();

  const isDarkTheme = resolvedTheme === ThemeName.DARK;

  const boardsPageScreenshotSrc = isDarkTheme
    ? images.BoardsPageScreenshotDarkImg
    : images.BoardsPageScreenshotImg;
  const boardPageScreenshotSrc = isDarkTheme
    ? images.BoardPageScreenshotDarkImg
    : images.BoardPageScreenshotImg;
  const searchScreenshotSrc = isDarkTheme
    ? images.SearchScreenshotDarkImg
    : images.SearchScreenshotImg;

  return (
    <section className={classes.container}>
      <div className={classes.advantage}>
        <Image
          src={boardsPageScreenshotSrc}
          alt="boards page"
          className={classes.advantageImage}
        />
        <div className={classes.advantageInfo}>
          <Image
            src={images.Advantage1Img}
            alt="advantage"
            className={classNames(classes.advantageInfoImage, 'invertible')}
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
      <div className={classes.advantage}>
        <Image
          src={boardPageScreenshotSrc}
          alt="board detail page"
          className={classes.advantageImage}
        />
        <div className={classes.advantageInfo}>
          <Image
            src={images.Advantage2Img}
            alt="advantage"
            className={classNames(classes.advantageInfoImage, 'invertible')}
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
        <Image
          src={searchScreenshotSrc}
          alt="board detail page"
          className={classes.advantageImage}
        />
        <div className={classes.advantageInfo}>
          <Image
            src={images.Advantage3Img}
            alt="advantage"
            className={classNames(classes.advantageInfoImage, 'invertible')}
          />
          <div>
            <Typography variant="largeTitle3" weight={600}>
              {contentMap.advantage3.title}
            </Typography>
            <Typography variant="text" weight={500} colorName="text/400">
              {contentMap.advantage3.description}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AdvantagesSection };
