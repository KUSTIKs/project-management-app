'use client';

import { FC, ReactNode } from 'react';

import { AppLink, Typography } from '@project-management-app/components';

import classes from './search-item.module.scss';

type Props = {
  title: string;
  subtitle?: ReactNode;
  icon?: ReactNode;
  href: string;
};

const SearchItem: FC<Props> = ({ title, icon, subtitle, href }) => {
  return (
    <AppLink className={classes.wrapper} href={href}>
      {icon && <div className={classes.iconWrapper}>{icon}</div>}
      <div className={classes.textInfo}>
        <Typography
          variant="headline"
          weight={600}
          colorName="text/200"
          className={classes.title}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="text"
            weight={500}
            colorName="text/700"
            className={classes.subtitle}
          >
            {subtitle}
          </Typography>
        )}
      </div>
    </AppLink>
  );
};

export { SearchItem };
