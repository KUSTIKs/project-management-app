import { FC, useState } from 'react';

import { BoardCard as StatelessBoardCard } from '@project-management-app/components';
import { AppLocale, Board } from '@project-management-app/types';

import { UpdateBoardModal } from '../update-board-modal/update-board-modal';
import { DeleteBoardModal } from '../delete-board-modal/delete-board-modal';

type Props = {
  board: Board;
  locale: AppLocale;
};

const BoardCard: FC<Props> = ({ board, locale }) => {
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
        locale={locale}
        handleClose={closeDeleteModal}
        isOpen={isDeleteModalOpen}
      />
      <UpdateBoardModal
        board={board}
        handleClose={closeUpdateModal}
        isOpen={isUpdateModalOpen}
        locale={locale}
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
