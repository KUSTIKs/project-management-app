import { CSSProperties, FC } from 'react';

import { isString } from '@project-management-app/helpers';

import classes from './loader.module.scss';

type Props = {
  size?: number | string;
  style?: CSSProperties;
};

const Loader: FC<Props> = ({ size, style }) => {
  return (
    <div
      className={classes.loader}
      style={{
        ...style,
        fontSize: isString(size) ? size : `${size}px`,
      }}
    />
  );
};

export { Loader };
