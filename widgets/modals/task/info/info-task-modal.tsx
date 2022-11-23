'use client';

import { FC } from 'react';

import { Task } from '@project-management-app/types';
import {
  Button,
  Icon,
  Modal,
  TextInput,
} from '@project-management-app/components';
import { useAppContext, useBooleanState } from '@project-management-app/hooks';

import { taskModalsDictionary } from '../task-modals.dictionary';
import { DeleteTaskModal, UpdateTaskModal } from '../task-modals';

type Props = {
  task: Task;
  boardId: string;
  columnId: string;
  isOpen: boolean;
  handleClose: () => void;
};

const InfoTaskModal: FC<Props> = ({
  task,
  boardId,
  handleClose,
  isOpen,
  columnId,
}) => {
  const { title, description } = task;
  const { locale } = useAppContext();
  const contentMap = taskModalsDictionary.getContentMap({ locale });
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
      {!isUpdateModalOpen && !isDeleteModalOpen && (
        <Modal
          title={contentMap.infoTask}
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
            <TextInput
              label="description"
              variant="unfilled"
              isMultiline
              value={description}
            />
          </Modal.Fieldset>
        </Modal>
      )}
      <UpdateTaskModal
        columnId={columnId}
        boardId={boardId}
        task={task}
        handleClose={handleUpdateModalClose}
        isOpen={isUpdateModalOpen}
      />
      <DeleteTaskModal
        columnId={columnId}
        boardId={boardId}
        task={task}
        handleClose={handleDeleteModalClose}
        isOpen={isDeleteModalOpen}
      />
    </>
  );
};

export { InfoTaskModal };
