'use client';

import { FC, FormEventHandler, ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Button, Icon, Typography } from '@project-management-app/components';
import { useOutsideClick } from '@project-management-app/hooks';

import classes from './modal.module.scss';
import {
  ModalActions,
  ModalButtonGroup,
  ModalFieldset,
} from './subcomponents/subcomponents';

type Props = {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  handleClose?: () => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  isDisabled?: boolean;
};

const Modal: FC<Props> & {
  Fieldset: typeof ModalFieldset;
  ButtonGroup: typeof ModalButtonGroup;
  Actions: typeof ModalActions;
} = ({ title, children, isOpen, handleClose, onSubmit, isDisabled }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);
  const Component: any = onSubmit ? 'form' : 'div';
  const isForm = Component === 'form';

  const pointerEvents = isDisabled ? 'none' : undefined;

  const formProps = {
    onSubmit,
  };
  const props = isForm && formProps;

  const setOverflow = (value: string) => {
    document.documentElement.style.overflow = value;
  };

  const openModal = () => {
    const isDialogOpen = dialogRef.current?.open;

    if (!isDialogOpen) {
      dialogRef.current?.showModal();
    }
  };

  useOutsideClick(wrapperRef, handleClose);

  useEffect(() => {
    if (!isOpen) return;

    openModal();
  }, [isOpen]);

  useEffect(() => {
    setOverflow(isOpen ? 'hidden' : 'unset');

    return () => {
      setOverflow('unset');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modal = (
    <dialog ref={dialogRef} className={classes.dialog} open={false}>
      <Component
        {...props}
        className={classes.wrapper}
        ref={wrapperRef}
        style={{ pointerEvents }}
      >
        <div className={classes.header}>
          <Typography variant="title2" weight={700}>
            {title}
          </Typography>
          <Button
            symmetricPadding
            variant="text"
            size="s"
            onClick={handleClose}
            type="button"
          >
            <Icon.CloseLine size={20} />
          </Button>
        </div>
        {children}
      </Component>
    </dialog>
  );

  const container = document.getElementById('modal-portal');

  if (!container) {
    console.error('Could not found element with id "modal-portal"');
    return null;
  }

  return createPortal(modal, container);
};

Modal.Fieldset = ModalFieldset;
Modal.ButtonGroup = ModalButtonGroup;
Modal.Actions = ModalActions;

export { Modal };
