import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { DeleteEntityModal } from '@project-management-app/components';
import { AppLocale, Board } from '@project-management-app/types';
import { boardsService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';

type Props = {
  locale: AppLocale;
  isOpen: boolean;
  handleClose: () => void;
  board: Board;
};

const DeleteBoardModal: FC<Props> = ({
  handleClose,
  isOpen,
  locale,
  board,
}) => {
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
      queryKey: [QueryKey.BOARDS],
    });
  };

  return (
    <DeleteEntityModal
      entityName={board.title}
      handleDelete={deleteBoard}
      isLoading={isLoading}
      errorMessage={errorMessage}
      locale={locale}
      handleClose={handleClose}
      isOpen={isOpen}
    />
  );
};

export { DeleteBoardModal };
