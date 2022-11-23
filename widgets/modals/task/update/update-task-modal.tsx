'use client';

import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from 'react-query';

import {
  Modal,
  TextInput,
  UpdateEntityModal,
} from '@project-management-app/components';
import { Task, UpdateTaskDto } from '@project-management-app/types';
import { tasksService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';

import { getCreateTaskSchema } from '../create/create-task-modal.schema';
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateTaskDto>({
    resolver: zodResolver(
      getCreateTaskSchema({
        locale,
      })
    ),
    defaultValues: task,
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
      <Modal.Fieldset>
        <TextInput
          label={contentMap.title}
          {...register('title')}
          errorMessage={errors.title?.message}
        />
        <TextInput
          label={contentMap.description}
          {...register('description')}
          isMultiline
          errorMessage={errors.description?.message}
        />
      </Modal.Fieldset>
    </UpdateEntityModal>
  );
};

export { UpdateTaskModal };
