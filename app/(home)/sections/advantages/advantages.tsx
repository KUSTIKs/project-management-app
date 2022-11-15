/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import Image from 'next/image';

import { Typography } from '@project-management-app/components';

import classes from './advantages.module.scss';

const Advantages: FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.advantage}>
        <img
          src="/boards-page-screenshot.png"
          alt="boards page"
          className={classes.advantageImage}
        />
        <div className={classes.advantageInfo}>
          <Image
            src="/advantage-1.avif"
            alt="advantage"
            height={60}
            width={90}
            className={classes.advantageInfoImage}
          />
          <div>
            <Typography variant="largeTitle3" weight={600}>
              Ac mauris ut quis
            </Typography>
            <Typography variant="text" weight={500} colorName="text/400">
              Adipiscing vitae nisi dictum elementum adipiscing. Sem suspendisse
              id eget fermentum. Ante eget risus ullamcorper feugiat. Iaculis
              lectus ac id nibh orci lectus amet hendrerit.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.advantage}>
        <img
          src="/board-page-screenshot.png"
          alt="board detail page"
          className={classes.advantageImage}
        />
        <div className={classes.advantageInfo}>
          <Image
            src="/advantage-2.avif"
            alt="advantage"
            height={60}
            width={90}
            className={classes.advantageInfoImage}
          />
          <div>
            <Typography variant="largeTitle3" weight={600}>
              Sodales commodo
            </Typography>
            <Typography variant="text" weight={500} colorName="text/400">
              Amet laoreet vestibulum ut in sed tortor massa. Tempor vitae arcu
              urna nulla eget enim et.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Advantages };
