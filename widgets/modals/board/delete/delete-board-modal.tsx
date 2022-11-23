'use client';

import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { DeleteEntityModal } from '@project-management-app/components';
import { Board } from '@project-management-app/types';
import { boardsService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';

import { boardModalsDictionary } from '../board-modals.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  board: Board;
};

const DeleteBoardModal: FC<Props> = ({ handleClose, isOpen, board }) => {
  const { locale } = useAppContext();
  const contentMap = boardModalsDictionary.getContentMap({ locale });
  const queryClient = useQueryClient();
  const {
    mutate: deleteBoard,
    isLoading,
    error,
  } = useMutation({
    mutationKey: [QueryKey.BOARDS, HttpMethod.DELETE],
    mutationFn: () => boardsService.delete(board.id),
    onSuccess: () => handleDeleted(),
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleDeleted = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.BOARDS, { id: board.id }],
    });
    handleClose();
  };

  return (
    <DeleteEntityModal
      title={contentMap.deleteBoard}
      withQuotes
      entityName={board.title}
      handleDelete={deleteBoard}
      isLoading={isLoading}
      errorMessage={errorMessage}
      handleClose={handleClose}
      isOpen={isOpen}
    />
  );
};

export { DeleteBoardModal };
