import { FC, ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import classNames from 'classnames';

import { AppLink, Loader } from '@project-management-app/components';

import classes from './button.module.scss';

type Props = (
  | Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>
  | ComponentProps<typeof AppLink>
) & {
  size?: 'm' | 's' | 'l';
  variant?: 'contained' | 'ghost' | 'text';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  href?: string;
  symmetricPadding?: boolean;
};

const Button: FC<Props> = ({
  children,
  size = 'm',
  variant = 'contained',
  isLoading = false,
  isDisabled = false,
  symmetricPadding = false,
  startIcon,
  endIcon,
  href,
  ...attrs
}) => {
  const Component: any = href ? AppLink : 'button';
  const isButton = Component === 'button';
  const linkProps = {
    href,
  };
  const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> | false = {
    type: 'button',
    disabled: isLoading || isDisabled,
  };

  const props = isButton ? buttonProps : linkProps;

  return (
    <Component
      {...props}
      {...attrs}
      className={classNames(classes.button, attrs.className, {
        [classes.button_size_l]: size === 'l',
        [classes.button_size_m]: size === 'm',
        [classes.button_size_s]: size === 's',
        [classes.button_variant_contained]: variant === 'contained',
        [classes.button_variant_ghost]: variant === 'ghost',
        [classes.button_variant_text]: variant === 'text',
        [classes.button_disabled]: isDisabled,
        [classes.button_symmetricPadding]: symmetricPadding,
      })}
    >
      {isLoading && (
        <Loader
          size="1.1em"
          colorPrimary="currentColor"
          colorSecondary="transparent"
        />
      )}
      {startIcon && <span className={classes.icon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={classes.icon}>{endIcon}</span>}
    </Component>
  );
};

export { Button };
