'use client';

import {
  FC,
  FormEventHandler,
  ReactElement,
  cloneElement,
  useRef,
  useEffect,
  MouseEventHandler,
} from 'react';
import classNames from 'classnames';

import { Button, Icon } from '@project-management-app/components';
import {
  useBooleanState,
  useOutsideClick,
} from '@project-management-app/hooks';

import classes from './single-field-form.module.scss';

type Props = {
  preview: ReactElement<{
    onClick: MouseEventHandler;
  }>;
  children: ReactElement<{
    autoFocus: boolean;
  }>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  isLoading?: boolean;
  isActionDisabled?: boolean;
  handleCanceled?: () => void;
  direction?: 'vertical' | 'horizontal';
};

const SingleFieldForm: FC<Props> = ({
  preview,
  children,
  onSubmit,
  isLoading,
  isActionDisabled,
  handleCanceled,
  direction = 'horizontal',
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isEditing, isEditingActions] = useBooleanState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    onSubmit(e);
  };

  const handleClick: MouseEventHandler = (e) => {
    if (!getSelection()?.isCollapsed || e.target !== e.currentTarget) return;
    isEditingActions.setTrue();
  };

  useEffect(() => {
    if (isLoading) return;

    isEditingActions.setFalse();
  }, [isEditingActions, isLoading]);

  useEffect(() => {
    if (isEditing) return;
    handleCanceled?.();
  }, [handleCanceled, isEditing]);

  useOutsideClick(formRef, isEditingActions.setFalse);

  if (!isEditing) {
    return cloneElement(preview, {
      onClick: handleClick,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(classes.form, {
        [classes.form_direction_horizontal]: direction === 'horizontal',
        [classes.form_direction_vertical]: direction === 'vertical',
      })}
      ref={formRef}
    >
      {cloneElement(children, {
        autoFocus: true,
      })}
      {direction === 'horizontal' ? (
        <div className={classes.actions}>
          <Button
            startIcon={<Icon.CloseLine />}
            variant="ghost"
            onClick={isEditingActions.setFalse}
          >
            Cancel
          </Button>
          <Button
            startIcon={<Icon.CheckLine />}
            type="submit"
            isLoading={isLoading}
            isDisabled={isActionDisabled}
          >
            Submit
          </Button>
        </div>
      ) : (
        <div className={classes.actions}>
          <Button
            size="l"
            symmetricPadding
            variant="ghost"
            onClick={isEditingActions.setFalse}
          >
            <Icon.CloseLine size="1.2em" />
          </Button>
          <Button
            size="l"
            symmetricPadding
            type="submit"
            isLoading={isLoading}
            isDisabled={isActionDisabled}
          >
            <Icon.CheckLine size="1.2em" />
          </Button>
        </div>
      )}
    </form>
  );
};

export { SingleFieldForm };
