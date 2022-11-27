'use client';

import { ComponentProps, FC, ReactNode } from 'react';

import { Button, Icon, Modal } from '@project-management-app/components';
import { useAppContext } from '@project-management-app/hooks';

import { modalsDictionary } from '../modals.dictionary';

type Props = Omit<ComponentProps<typeof Modal>, 'onSubmit' | 'isDisabled'> & {
  handleDeleteClick: () => void;
  handleUpdateClick: () => void;
  handleClose: () => void;
  children: ReactNode;
};

const InfoEntityModal: FC<Props> = ({
  handleDeleteClick,
  handleUpdateClick,
  children,
  ...modalProps
}) => {
  const { locale } = useAppContext();
  const contentMap = modalsDictionary.getContentMap({ locale });

  return (
    <Modal {...modalProps}>
      <Modal.Actions>
        <Button
          size="s"
          variant="ghost"
          startIcon={<Icon.EditLine />}
          onClick={() => {
            handleUpdateClick();
            modalProps.handleClose();
          }}
        >
          {contentMap.update}
        </Button>
        <Button
          size="s"
          variant="ghost"
          startIcon={<Icon.BinLine />}
          onClick={() => {
            handleDeleteClick();
            modalProps.handleClose();
          }}
        >
          {contentMap.delete}
        </Button>
      </Modal.Actions>
      <Modal.Fieldset>{children}</Modal.Fieldset>
    </Modal>
  );
};

export { InfoEntityModal };
