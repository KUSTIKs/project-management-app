import { FC } from 'react';

import { BoardCard as StatelessBoardCard } from '@project-management-app/components';
import { Board } from '@project-management-app/types';
import {
  DeleteBoardModal,
  UpdateBoardModal,
} from '@project-management-app/widgets';
import { useBooleanState } from '@project-management-app/hooks';

type Props = {
  board: Board;
};

const BoardCard: FC<Props> = ({ board }) => {
  const [isDeleteModalOpen, isDeleteModalOpenActions] = useBooleanState(false);
  const [isUpdateModalOpen, isUpdateModalOpenActions] = useBooleanState(false);

  return (
    <>
      <DeleteBoardModal
        board={board}
        handleClose={isDeleteModalOpenActions.setFalse}
        isOpen={isDeleteModalOpen}
      />
      <UpdateBoardModal
        board={board}
        handleClose={isUpdateModalOpenActions.setFalse}
        isOpen={isUpdateModalOpen}
      />
      <StatelessBoardCard
        title={board.title}
        description={board.description}
        handleDelete={isDeleteModalOpenActions.setTrue}
        handleUpdate={isUpdateModalOpenActions.setTrue}
      />
    </>
  );
};

export { BoardCard };
