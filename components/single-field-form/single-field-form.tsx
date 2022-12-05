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

import { Button, Icon } from '@project-management-app/components';
import {
  useBooleanState,
  useOutsideFocus,
} from '@project-management-app/hooks';

import classes from './single-field-form.module.scss';

type Props = {
  preview: ReactElement<{
    onDoubleClick: MouseEventHandler;
  }>;
  children: ReactElement<{
    autoFocus: boolean;
  }>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  isLoading?: boolean;
  isActionDisabled?: boolean;
  handleCanceled?: () => void;
};

const SingleFieldForm: FC<Props> = ({
  preview,
  children,
  onSubmit,
  isLoading,
  isActionDisabled,
  handleCanceled,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isEditing, isEditingActions] = useBooleanState(false);
  const register = useOutsideFocus(isEditingActions.setFalse);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    onSubmit(e);
  };

  const handleDoubleClick: MouseEventHandler = (e) => {
    window.getSelection()?.removeAllRanges?.();
    window.getSelection()?.empty?.();
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

  if (!isEditing) {
    return cloneElement(preview, {
      onDoubleClick: handleDoubleClick,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={classes.form}
      ref={formRef}
      {...register}
    >
      {cloneElement(children, {
        autoFocus: true,
      })}
      <div className={classes.actions}>
        <Button
          startIcon={<Icon.CloseLine />}
          variant="ghost"
          onClick={isEditingActions.setFalse}
        >
          Cancel
        </Button>
        <Button
          startIcon={<Icon.EditLine />}
          type="submit"
          isLoading={isLoading}
          isDisabled={isActionDisabled}
        >
          Update
        </Button>
      </div>
    </form>
  );
};

export { SingleFieldForm };
