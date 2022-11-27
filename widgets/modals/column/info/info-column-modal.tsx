'use client';

import { FC } from 'react';

import { Column } from '@project-management-app/types';
import {
  InfoEntityModal,
  TextPreview,
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

  return (
    <>
      <InfoEntityModal
        title={contentMap.infoColumn}
        handleClose={handleClose}
        isOpen={isOpen}
        handleDeleteClick={isDeleteModalOpenActions.setTrue}
        handleUpdateClick={isUpdateModalOpenActions.setTrue}
      >
        <TextPreview label={contentMap.title}>{title}</TextPreview>
      </InfoEntityModal>
      <UpdateColumnModal
        boardId={boardId}
        column={column}
        handleClose={isUpdateModalOpenActions.setFalse}
        isOpen={isUpdateModalOpen}
      />
      <DeleteColumnModal
        boardId={boardId}
        column={column}
        handleClose={isDeleteModalOpenActions.setFalse}
        isOpen={isDeleteModalOpen}
      />
    </>
  );
};

export { InfoColumnModal };
