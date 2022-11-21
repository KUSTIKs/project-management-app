import { CSSProperties, FC } from 'react';

import { isString } from '@project-management-app/helpers';

import classes from './loader.module.scss';

type Props = {
  size?: number | string;
  style?: CSSProperties;
  colorPrimary?: string;
  colorSecondary?: string;
};

const Loader: FC<Props> = ({ size, style, colorPrimary, colorSecondary }) => {
  return (
    <div
      className={classes.loader}
      style={{
        ...style,
        fontSize: isString(size) ? size : `${size}px`,
        borderColor: colorPrimary,
        borderBottomColor: colorSecondary,
      }}
    />
  );
};

export { Loader };
