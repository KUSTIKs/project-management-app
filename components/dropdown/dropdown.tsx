'use client';

import classNames from 'classnames';
import { cloneElement, ReactElement, useRef } from 'react';

import { Option } from '@project-management-app/types';
import { isString } from '@project-management-app/helpers';
import {
  useBooleanState,
  useOutsideClick,
  useOutsideFocus,
} from '@project-management-app/hooks';
import { Typography } from '@project-management-app/components';

import classes from './dropdown.module.scss';

type Props<T extends string> = {
  trigger: ReactElement;
  options?: Option<T>[];
  handleChange: (value: T) => void;
  direction?: 'up' | 'down' | 'left' | 'right';
  alignment?: 'start' | 'end';
  size?: 's' | 'm' | 'l';
  maxOptionListHeight?: number;
};

const Dropdown = <T extends string>({
  options,
  handleChange,
  trigger,
  direction = 'down',
  alignment = 'start',
  size = 's',
  maxOptionListHeight,
}: Props<T>) => {
  const [isOpen, isOpenActions] = useBooleanState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: T) => {
    handleChange(value);
    isOpenActions.setFalse();
  };

  const { onBlur: handleBlur } = useOutsideFocus(isOpenActions.setFalse);

  useOutsideClick(wrapperRef, isOpenActions.setFalse);

  return (
    <div className={classes.wrapper} ref={wrapperRef} onBlur={handleBlur}>
      {cloneElement(trigger, {
        onClick: isOpenActions.toggle,
      })}
      {isOpen && (
        <ul
          className={classNames(classes.optionList, {
            [classes.optionList_direction_up]: direction === 'up',
            [classes.optionList_direction_down]: direction === 'down',
            [classes.optionList_direction_left]: direction === 'left',
            [classes.optionList_direction_right]: direction === 'right',
            [classes.optionList_alignment_start]: alignment === 'start',
            [classes.optionList_alignment_end]: alignment === 'end',
          })}
          style={{
            maxHeight: maxOptionListHeight,
          }}
        >
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
                  onClick={() => handleOptionClick(value)}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
