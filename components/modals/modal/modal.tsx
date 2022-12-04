'use client';

import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Button, Icon, Typography } from '@project-management-app/components';
import { useOutsideClick } from '@project-management-app/hooks';

import classes from './modal.module.scss';
import {
  ModalActions,
  ModalButtonGroup,
  ModalFieldset,
} from './subcomponents/subcomponents';
import { dropIn, fadeIn } from './helpers/helpers';

type Props = {
  title: string;
  children: ReactNode;
  isOpen?: boolean;
  handleClose?: () => void;
  isDisabled?: boolean;
};

const Modal: FC<Props> & {
  Fieldset: typeof ModalFieldset;
  ButtonGroup: typeof ModalButtonGroup;
  Actions: typeof ModalActions;
} = ({ title, children, isOpen, handleClose, isDisabled }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState<HTMLElement>();

  const pointerEvents = isDisabled ? 'none' : undefined;

  const setOverflow = (value: string) => {
    document.documentElement.style.overflow = value;
  };

  useOutsideClick(wrapperRef, handleClose);

  useEffect(() => {
    setOverflow(isOpen ? 'hidden' : 'unset');

    return () => {
      setOverflow('unset');
    };
  }, [isOpen]);

  useEffect(() => {
    const container = document.getElementById('modal-portal');

    if (!container) {
      console.error('Could not found element with id "modal-portal"');
      return;
    }

    setContainer(container);
  }, []);

  const modal = (
    <motion.div
      className={classes.backdrop}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <motion.div
        className={classes.wrapper}
        ref={wrapperRef}
        style={{ pointerEvents }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
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
      </motion.div>
    </motion.div>
  );

  if (!container) return null;

  return createPortal(
    <AnimatePresence initial={false} mode="wait">
      {isOpen ? modal : null}
    </AnimatePresence>,
    container
  );
};

Modal.Fieldset = ModalFieldset;
Modal.ButtonGroup = ModalButtonGroup;
Modal.Actions = ModalActions;

export { Modal };
