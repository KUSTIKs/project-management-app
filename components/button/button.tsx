import { FC, ButtonHTMLAttributes, ReactElement } from 'react';
import classNames from 'classnames';

import classes from './button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'm' | 's' | 'l';
  variant?: 'contained' | 'ghost' | 'text';
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

const Button: FC<Props> = ({
  children,
  size = 'm',
  variant = 'contained',
  startIcon,
  endIcon,
  ...buttonAttrs
}) => {
  return (
    <button
      {...buttonAttrs}
      className={classNames(classes.button, {
        [classes.button_size_l]: size === 'l',
        [classes.button_size_m]: size === 'm',
        [classes.button_size_s]: size === 's',
        [classes.button_variant_contained]: variant === 'contained',
        [classes.button_variant_ghost]: variant === 'ghost',
        [classes.button_variant_text]: variant === 'text',
      })}
    >
      {startIcon && <span className={classes.icon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={classes.icon}>{endIcon}</span>}
    </button>
  );
};

export { Button };
