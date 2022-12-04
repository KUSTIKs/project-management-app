'use client';

import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import {
  Select,
  TextArea,
  TextInput,
  UpdateEntityModal,
} from '@project-management-app/components';
import { Task, UpdateTaskDto } from '@project-management-app/types';
import { tasksService, usersService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';
import { getUpdateTaskSchema } from '@project-management-app/schemas';

import { taskModalsDictionary } from '../task-modals.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  task: Task;
  boardId: string;
  columnId: string;
};

const UpdateTaskModal: FC<Props> = ({
  handleClose,
  isOpen,
  task,
  boardId,
  columnId,
}) => {
  const { locale } = useAppContext();
  const contentMap = taskModalsDictionary.getContentMap({
    locale,
  });
  const queryClient = useQueryClient();
  const {
    mutate: updateTask,
    error,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: (dto: UpdateTaskDto) =>
      tasksService.update({ taskId: task.id, boardId, columnId }, dto),
    mutationKey: [QueryKey.TASKS, HttpMethod.PUT],
    onSuccess: () => handleUpdated(),
  });
  const { data: users } = useQuery({
    queryFn: usersService.getAll,
    queryKey: [QueryKey.USERS],
  });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty },
  } = useForm<UpdateTaskDto>({
    resolver: zodResolver(
      getUpdateTaskSchema({
        locale,
      })
    ),
    defaultValues: task,
  });
  const { data: assignee } = useQuery({
    queryFn: () => usersService.getById(watch('userId')),
    queryKey: [QueryKey.USERS, watch('userId')],
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleUpdateTask: SubmitHandler<Partial<UpdateTaskDto>> = (dto) => {
    const { id, files, ...taskProps } = task;
    updateTask({ ...taskProps, ...dto });
  };

  const handleCloseWithReset = () => {
    handleClose();
    reset();
  };

  const handleUpdated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS, { columnId }],
    });
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS],
      exact: true,
    });
    handleCloseWithReset();
  };

  useEffect(() => {
    reset(task);
  }, [task, reset]);

  return (
    <UpdateEntityModal
      withQuotes
      title={contentMap.updateTask}
      errorMessage={errorMessage}
      handleClose={handleCloseWithReset}
      isOpen={isOpen}
      handleUpdate={handleSubmit(handleUpdateTask)}
      isLoading={isLoading}
      isError={isError}
      isActionDisabled={!isDirty}
    >
      <TextInput
        label={contentMap.title}
        {...register('title')}
        variant="unfilled"
        errorMessage={errors.title?.message}
      />
      <Select
        label={contentMap.assignee}
        variant="unfilled"
        defaultValue={assignee?.id}
        {...register('userId')}
        errorMessage={errors.userId?.message}
      >
        {users?.map(({ id, login }) => (
          <option key={id} value={id}>
            {login}
          </option>
        ))}
      </Select>

      <TextArea
        label={contentMap.description}
        {...register('description')}
        variant="unfilled"
        errorMessage={errors.description?.message}
      />
    </UpdateEntityModal>
  );
};

export { UpdateTaskModal };
