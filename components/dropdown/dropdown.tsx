'use client';

import classNames from 'classnames';
import { cloneElement, ReactElement, ReactNode, useRef } from 'react';

import {
  useBooleanState,
  useOutsideClick,
  useOutsideFocus,
} from '@project-management-app/hooks';

import classes from './dropdown.module.scss';

type Props<T extends string> = {
  trigger: ReactElement;
  direction?: 'up' | 'down' | 'left' | 'right';
  alignment?: 'start' | 'end';
  children: ReactNode;
};

const Dropdown = <T extends string>({
  trigger,
  direction = 'down',
  alignment = 'start',
  children,
}: Props<T>) => {
  const [isOpen, isOpenActions] = useBooleanState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { onBlur: handleBlur } = useOutsideFocus(isOpenActions.setFalse);

  useOutsideClick(wrapperRef, isOpenActions.setFalse);

  return (
    <div className={classes.wrapper} ref={wrapperRef} onBlur={handleBlur}>
      {cloneElement(trigger, {
        onClick: isOpenActions.toggle,
      })}
      {isOpen && (
        <div
          className={classNames(classes.child, {
            [classes.child_direction_up]: direction === 'up',
            [classes.child_direction_down]: direction === 'down',
            [classes.child_direction_left]: direction === 'left',
            [classes.child_direction_right]: direction === 'right',
            [classes.child_alignment_start]: alignment === 'start',
            [classes.child_alignment_end]: alignment === 'end',
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
