'use client';

import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { DeleteEntityModal } from '@project-management-app/components';
import { Task } from '@project-management-app/types';
import { tasksService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';

import { taskModalsDictionary } from '../task-modals.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  task: Task;
  boardId: string;
  columnId: string;
};

const DeleteTaskModal: FC<Props> = ({
  handleClose,
  isOpen,
  task,
  boardId,
  columnId,
}) => {
  const { locale } = useAppContext();
  const contentMap = taskModalsDictionary.getContentMap({ locale });
  const queryClient = useQueryClient();
  const {
    mutate: deleteTask,
    isLoading,
    error,
    isError,
  } = useMutation({
    mutationKey: [QueryKey.TASKS, HttpMethod.DELETE],
    mutationFn: () =>
      tasksService.delete({ taskId: task.id, boardId, columnId }),
    onSuccess: () => handleDeleted(),
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleDeleted = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS, { columnId }],
    });
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS],
      exact: true,
    });
    handleClose();
  };

  return (
    <DeleteEntityModal
      title={contentMap.deleteTask}
      withQuotes
      entityName={task.title}
      handleDelete={deleteTask}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
      handleClose={handleClose}
      isOpen={isOpen}
    />
  );
};

export { DeleteTaskModal };
