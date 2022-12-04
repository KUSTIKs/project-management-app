'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import {
  CreateEntityModal,
  Select,
  TextArea,
  TextInput,
} from '@project-management-app/components';
import { CreateTaskDto } from '@project-management-app/types';
import { tasksService, usersService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';
import { getCreateTaskSchema } from '@project-management-app/schemas';

import { taskModalsDictionary } from '../task-modals.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  boardId: string;
  columnId: string;
};

const CreateTaskModal: FC<Props> = ({
  handleClose,
  isOpen,
  boardId,
  columnId,
}) => {
  const { locale, payload } = useAppContext();
  const contentMap = taskModalsDictionary.getContentMap({
    locale,
  });
  const queryClient = useQueryClient();
  const {
    mutate: createTask,
    error,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: (dto: Omit<CreateTaskDto, 'userId'>) =>
      tasksService.create({ boardId, columnId }, dto),
    mutationKey: [QueryKey.TASKS, HttpMethod.POST],
    onSuccess: () => handleCreated(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateTaskDto>({
    resolver: zodResolver(
      getCreateTaskSchema({
        locale,
      })
    ),
  });
  const { data: users } = useQuery({
    queryFn: usersService.getAll,
    queryKey: [QueryKey.USERS],
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleCreateTask: SubmitHandler<CreateTaskDto> = (dto) => {
    createTask(dto);
  };

  const handleCloseWithReset = () => {
    handleClose();
    reset();
  };

  const handleCreated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS, { columnId }],
    });
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS],
      exact: true,
    });
    handleCloseWithReset();
  };

  return (
    <CreateEntityModal
      title={contentMap.createTask}
      errorMessage={errorMessage}
      handleClose={handleCloseWithReset}
      isOpen={isOpen}
      handleCreate={handleSubmit(handleCreateTask)}
      isLoading={isLoading}
      isError={isError}
    >
      <TextInput
        label={contentMap.title}
        {...register('title')}
        errorMessage={errors.title?.message}
      />
      <Select
        label={contentMap.assignee}
        defaultValue={payload?.userId}
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
        errorMessage={errors.description?.message}
      />
    </CreateEntityModal>
  );
};

export { CreateTaskModal };
