'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from 'react-query';

import {
  CreateEntityModal,
  Modal,
  TextInput,
} from '@project-management-app/components';
import { CreateTaskDto } from '@project-management-app/types';
import { tasksService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';

import { getCreateTaskSchema } from './create-task-modal.schema';
import { createTaskModalsDictionary } from '../task-modals.dictionary';

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
  const { locale } = useAppContext();
  const contentMap = createTaskModalsDictionary.getContentMap({
    locale,
  });
  const queryClient = useQueryClient();
  const {
    mutate: createTask,
    error,
    isLoading,
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
      queryKey: [QueryKey.TASKS],
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
    >
      <Modal.Fieldset>
        <TextInput
          label={contentMap.title}
          {...register('title')}
          errorMessage={errors.title?.message}
        />
        <TextInput
          label={contentMap.description}
          isMultiline
          {...register('description')}
          errorMessage={errors.description?.message}
        />
      </Modal.Fieldset>
    </CreateEntityModal>
  );
};

export { CreateTaskModal };
