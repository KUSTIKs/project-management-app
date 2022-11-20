'use client';

import classNames from 'classnames';
import {
  cloneElement,
  FC,
  FocusEventHandler,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { Option } from '@project-management-app/types';
import { isString } from '@project-management-app/helpers';

import classes from './dropdown.module.scss';

type Props = {
  trigger: ReactElement;
  options: Option[];
  handleChange: (value: string) => void;
  direction?: 'up' | 'down' | 'left' | 'right';
  alignment?: 'start' | 'end';
};

const Dropdown: FC<Props> = ({
  options,
  handleChange,
  trigger,
  direction = 'down',
  alignment = 'start',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((state) => !state);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (value: string) => {
    handleChange(value);
    closeDropdown();
  };

  const handleOuterClick = useCallback((e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    const isOuterClick = !wrapperRef.current?.contains(e.target);

    if (isOuterClick) {
      closeDropdown();
    }
  }, []);

  const handleBlur: FocusEventHandler<HTMLDivElement> = () => {
    requestAnimationFrame(() => {
      const hasFocusedElementInside = wrapperRef.current?.contains(
        document.activeElement
      );

      if (!hasFocusedElementInside) {
        closeDropdown();
      }
    });
  };

  useEffect(() => {
    globalThis.addEventListener('click', handleOuterClick);
    return () => {
      globalThis.removeEventListener('click', handleOuterClick);
    };
  }, [handleOuterClick]);

  return (
    <div className={classes.wrapper} ref={wrapperRef} onBlur={handleBlur}>
      {cloneElement(trigger, {
        onClick: toggleDropdown,
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
        >
          {options.map((option) => {
            const { name, value } = isString(option)
              ? { name: option, value: option }
              : option;

            return (
              <li key={value}>
                <button
                  className={classes.option}
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
