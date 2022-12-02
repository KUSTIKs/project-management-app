'use client';

import { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import { useTheme } from '@project-management-app/hooks';
import { ThemeName } from '@project-management-app/enums';
import Advantage1Img from '@project-management-app/images/advantage-1.avif';
import Advantage2Img from '@project-management-app/images/advantage-2.avif';
import Advantage3Img from '@project-management-app/images/advantage-3.avif';
import BoardsPageScreenshotDarkImg from '@project-management-app/images/boards-page-screenshot_dark.png';
import BoardsPageScreenshotImg from '@project-management-app/images/boards-page-screenshot.png';
import BoardPageScreenshotDarkImg from '@project-management-app/images/board-page-screenshot_dark.png';
import BoardPageScreenshotImg from '@project-management-app/images/board-page-screenshot.png';
import SearchScreenshotDarkImg from '@project-management-app/images/search-screenshot_dark.png';
import SearchScreenshotImg from '@project-management-app/images/search-screenshot.png';

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
    ? BoardsPageScreenshotDarkImg
    : BoardsPageScreenshotImg;
  const boardPageScreenshotSrc = isDarkTheme
    ? BoardPageScreenshotDarkImg
    : BoardPageScreenshotImg;
  const searchScreenshotSrc = isDarkTheme
    ? SearchScreenshotDarkImg
    : SearchScreenshotImg;

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
            src={Advantage1Img}
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
            src={Advantage2Img}
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
            src={Advantage3Img}
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
