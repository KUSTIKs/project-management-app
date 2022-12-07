'use client';

import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { DeleteEntityModal } from '@project-management-app/components';
import { Column } from '@project-management-app/types';
import { columnsService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';

import { columnModalsDictionary } from '../column-modals.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  column: Column;
  boardId: string;
};

const DeleteColumnModal: FC<Props> = ({
  handleClose,
  isOpen,
  column,
  boardId,
}) => {
  const { locale } = useAppContext();
  const contentMap = columnModalsDictionary.getContentMap({ locale });
  const queryClient = useQueryClient();
  const {
    mutate: deleteColumn,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationKey: [QueryKey.COLUMNS, HttpMethod.DELETE],
    mutationFn: () => columnsService.delete({ columnId: column.id, boardId }),
    onSuccess: () => handleDeleted(),
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleDeleted = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.COLUMNS],
    });
    handleClose();
  };

  return (
    <DeleteEntityModal
      title={contentMap.deleteColumn}
      withQuotes
      entityName={column.title}
      handleDelete={deleteColumn}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
      handleClose={handleClose}
      isOpen={isOpen}
    />
  );
};

export { DeleteColumnModal };
