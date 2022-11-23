import { FC, useState } from 'react';

import { BoardCard as StatelessBoardCard } from '@project-management-app/components';
import { Board } from '@project-management-app/types';

import { UpdateBoardModal } from '../update-board-modal/update-board-modal';
import { DeleteBoardModal } from '../delete-board-modal/delete-board-modal';

type Props = {
  board: Board;
};

const BoardCard: FC<Props> = ({ board }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };
  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <>
      <DeleteBoardModal
        board={board}
        handleClose={closeDeleteModal}
        isOpen={isDeleteModalOpen}
      />
      <UpdateBoardModal
        board={board}
        handleClose={closeUpdateModal}
        isOpen={isUpdateModalOpen}
      />
      <StatelessBoardCard
        title={board.title}
        description={board.description}
        handleDelete={openDeleteModal}
        handleUpdate={openUpdateModal}
      />
    </>
  );
};

export { BoardCard };
