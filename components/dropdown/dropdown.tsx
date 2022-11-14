import classNames from 'classnames';
import {
  cloneElement,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import classes from './dropdown.module.scss';

type Option = string | { name: string; value: string };

type Props = {
  trigger: ReactElement;
  options: Option[];
  handleChange: (value: string) => void;
  direction?: 'up' | 'down' | 'left' | 'right';
  alignment?: 'start' | 'end';
};

const Dropdown: FC<Props> = ({
  options,
  direction,
  alignment,
  handleChange,
  trigger,
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
  };

  const handleOuterClick = useCallback((e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    const isOuterClick = e.target.contains(wrapperRef.current);

    if (isOuterClick) {
      closeDropdown();
    }
  }, []);

  useEffect(() => {
    globalThis.addEventListener('click', handleOuterClick);
    return () => {
      globalThis.removeEventListener('click', handleOuterClick);
    };
  }, [handleOuterClick]);

  return (
    <div className={classes.wrapper} ref={wrapperRef}>
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
            const isString = typeof option === 'string';
            const { name, value } = isString
              ? { name: option, value: option }
              : option;

            return (
              <li
                className={classes.option}
                onClick={() => handleOptionClick(value)}
                key={value}
              >
                {name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { Dropdown };
