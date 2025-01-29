import { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { isString } from '@project-management-app/helpers';

import classes from './loader.module.scss';

type Props = HTMLAttributes<HTMLDivElement> & {
  size?: number | string;
  colorPrimary?: string;
  colorSecondary?: string;
};

const Loader: FC<Props> = ({
  size,
  style,
  colorPrimary,
  colorSecondary,
  className,
  ...attrs
}) => {
  return (
    <div
      {...attrs}
      className={classNames(className, classes.loader)}
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
