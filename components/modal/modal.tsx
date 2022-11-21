'use client';

import { FC, FormEventHandler, ReactNode, useEffect, useRef } from 'react';

import { Button, Icon, Typography } from '@project-management-app/components';
import { useOutsideClick } from '@project-management-app/hooks';

import classes from './modal.module.scss';
import { ModalFieldset } from './subcomponents/subcomponents';

type Props = {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  handleClose?: () => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

const Modal: FC<Props> & {
  Fieldset: typeof ModalFieldset;
} = ({ title, children, isOpen, handleClose, onSubmit }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const wrapperRef = useRef<HTMLElement>(null);
  const Component: any = onSubmit ? 'form' : 'div';

  const openModal = () => {
    const isDialogOpen = dialogRef.current?.open;

    if (!isDialogOpen) {
      dialogRef.current?.showModal();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    openModal();
  }, [isOpen]);

  useOutsideClick(wrapperRef, handleClose);

  if (!isOpen) return null;

  return (
    <dialog ref={dialogRef} className={classes.dialog} open={false}>
      <Component
        className={classes.wrapper}
        ref={wrapperRef}
        onSubmit={onSubmit}
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
};

Modal.Fieldset = ModalFieldset;

export { Modal };
