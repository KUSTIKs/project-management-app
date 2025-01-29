import classNames from 'classnames';
import { MouseEvent } from 'react';

import { Typography } from '@project-management-app/components';
import { isString } from '@project-management-app/helpers';
import { Option } from '@project-management-app/types';

import classes from './options.module.scss';

type Props<T extends string> = {
  options?: Option<T>[];
  handleChange: (value: T) => void;
  size?: 's' | 'm' | 'l';
};

const Options = <T extends string>({
  handleChange,
  options,
  size = 's',
}: Props<T>) => {
  const handleOptionClick =
    (value: T) => (e: MouseEvent<HTMLButtonElement>) => {
      handleChange(value);
      e.currentTarget.blur();
    };

  return (
    <ul className={classes.wrapper}>
      {!options?.length && (
        <Typography
          variant="headline"
          weight={500}
          colorName="text/600"
          style={{ padding: '5px 10px' }}
        >
          No options for now
        </Typography>
      )}
      {options?.map((option) => {
        const name = isString(option) ? option : option.name;
        const value = isString(option) ? option : option.value;

        return (
          <li key={value}>
            <button
              className={classNames(classes.option, {
                [classes.option_size_s]: size === 's',
                [classes.option_size_m]: size === 'm',
                [classes.option_size_l]: size === 'l',
              })}
              onClick={handleOptionClick(value)}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export { Options };
