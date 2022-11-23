'use client';

import { FC } from 'react';

import { Column } from '@project-management-app/types';
import {
  Button,
  Icon,
  Modal,
  TextInput,
} from '@project-management-app/components';
import { useAppContext, useBooleanState } from '@project-management-app/hooks';

import { columnModalsDictionary } from '../column-modals.dictionary';
import { DeleteColumnModal, UpdateColumnModal } from '../column-modals';

type Props = {
  column: Column;
  boardId: string;
  isOpen: boolean;
  handleClose: () => void;
};

const InfoColumnModal: FC<Props> = ({
  column,
  boardId,
  handleClose,
  isOpen,
}) => {
  const { title } = column;
  const { locale } = useAppContext();
  const contentMap = columnModalsDictionary.getContentMap({ locale });
  const [isUpdateModalOpen, isUpdateModalOpenActions] = useBooleanState(false);
  const [isDeleteModalOpen, isDeleteModalOpenActions] = useBooleanState(false);

  const handleUpdateModalClose = () => {
    isUpdateModalOpenActions.setFalse();
    handleClose();
  };
  const handleDeleteModalClose = () => {
    isDeleteModalOpenActions.setFalse();
    handleClose();
  };

  return (
    <>
      {!isDeleteModalOpen && !isUpdateModalOpen && (
        <Modal
          title={contentMap.infoColumn}
          handleClose={handleClose}
          isOpen={isOpen}
        >
          <Modal.Actions>
            <Button
              size="s"
              variant="ghost"
              startIcon={<Icon.EditLine />}
              onClick={isUpdateModalOpenActions.setTrue}
            >
              {contentMap.update}
            </Button>
            <Button
              size="s"
              variant="ghost"
              startIcon={<Icon.BinLine />}
              onClick={isDeleteModalOpenActions.setTrue}
            >
              {contentMap.delete}
            </Button>
          </Modal.Actions>
          <Modal.Fieldset disabled>
            <TextInput label="title" variant="unfilled" value={title} />
          </Modal.Fieldset>
        </Modal>
      )}
      <UpdateColumnModal
        boardId={boardId}
        column={column}
        handleClose={handleUpdateModalClose}
        isOpen={isUpdateModalOpen}
      />
      <DeleteColumnModal
        boardId={boardId}
        column={column}
        handleClose={handleDeleteModalClose}
        isOpen={isDeleteModalOpen}
      />
    </>
  );
};

export { InfoColumnModal };
