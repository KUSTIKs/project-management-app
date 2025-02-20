import {
  CSSProperties,
  ElementType,
  FC,
  HTMLAttributes,
  ReactNode,
} from 'react';
import classNames from 'classnames';

import { AppColorName } from '@project-management-app/types';
import { getAppColor } from '@project-management-app/helpers';

import { getDefaultComponent } from './helpers/helpers';
import { TypographyVariant } from './types/types';
import classes from './typography.module.scss';

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: ElementType;
  variant: TypographyVariant;
  weight?: string | number;
  colorName?: AppColorName;
  style?: CSSProperties;
  className?: string;
};

const Typography: FC<Props> = ({
  weight,
  children,
  variant,
  colorName,
  style,
  className,
  as: Component = getDefaultComponent(variant),
  ...attrs
}) => {
  const color = colorName && getAppColor(colorName);

  return (
    <Component
      {...attrs}
      style={{ fontWeight: weight, color, ...style }}
      className={classNames(className, {
        [classes.typography_variant_largeTitle1]: variant === 'largeTitle1',
        [classes.typography_variant_largeTitle2]: variant === 'largeTitle2',
        [classes.typography_variant_largeTitle3]: variant === 'largeTitle3',
        [classes.typography_variant_title1]: variant === 'title1',
        [classes.typography_variant_title2]: variant === 'title2',
        [classes.typography_variant_largeHeadline]: variant === 'largeHeadline',
        [classes.typography_variant_headline]: variant === 'headline',
        [classes.typography_variant_text]: variant === 'text',
        [classes.typography_variant_subhead]: variant === 'subhead',
      })}
    >
      {children}
    </Component>
  );
};

export { Typography };
