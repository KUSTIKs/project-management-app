'use client';

import { FC, useCallback, useEffect, useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import ReactMarkdown from 'react-markdown';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Task, UpdateTaskDto } from '@project-management-app/types';
import {
  AppLink,
  InfoEntityModal,
  Modal,
  Select,
  SingleFieldForm,
  TextArea,
  TextInput,
  TextPreview,
} from '@project-management-app/components';
import { useAppContext, useBooleanState } from '@project-management-app/hooks';
import { tasksService, usersService } from '@project-management-app/services';
import { QueryKey } from '@project-management-app/enums';
import { getUpdateTaskSchema } from '@project-management-app/schemas';
import { getKeyFromUnknown } from '@project-management-app/helpers';

import { taskModalsDictionary } from '../task-modals.dictionary';
import { DeleteTaskModal } from '../task-modals';

type TagName = keyof HTMLElementTagNameMap;
const allowedMarkdownElements: TagName[] = ['a', 'strong', 'em'];

type Props = {
  task: Task;
  boardId: string;
  columnId: string;
  isOpen: boolean;
  handleClose: () => void;
};

const InfoTaskModal: FC<Props> = ({
  task: initialTask,
  boardId,
  handleClose,
  isOpen,
  columnId,
}) => {
  const { locale } = useAppContext();
  const contentMap = taskModalsDictionary.getContentMap({ locale });
  const queryClient = useQueryClient();
  const [isDeleteModalOpen, isDeleteModalOpenActions] = useBooleanState(false);
  const { data: taskData } = useQuery({
    queryKey: [QueryKey.TASKS, initialTask.id],
    initialData: initialTask,
    queryFn: () =>
      tasksService.getById({
        boardId: initialTask.boardId,
        columnId: initialTask.columnId,
        taskId: initialTask.id,
      }),
  });
  const task = taskData!;
  const { data: assignee } = useQuery({
    queryFn: () => usersService.getById(task.userId),
    queryKey: [QueryKey.USERS, task.userId],
  });
  const { data: users } = useQuery({
    queryFn: usersService.getAll,
    queryKey: [QueryKey.USERS],
  });
  const {
    mutate: updateTask,
    error,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: (dto: UpdateTaskDto) =>
      tasksService.update({ taskId: task.id, boardId, columnId }, dto),
    onSuccess: () => handleUpdated(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateTaskDto>({
    resolver: zodResolver(
      getUpdateTaskSchema({
        locale,
      })
    ),
    defaultValues: task,
  });

  const taskHref = useMemo(() => {
    const boardPageUrl = new URL(`/boards/${boardId}`, location.href);

    boardPageUrl.searchParams.set('columnId', columnId);
    boardPageUrl.searchParams.set('taskId', task.id);

    const stringUrl = boardPageUrl.toString();

    return stringUrl;
  }, [boardId, columnId, task]);

  const { title, description, files } = task;

  const handleUpdated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS, { columnId }],
    });
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS],
    });
  };

  const handleUpdateTaskField: SubmitHandler<Partial<UpdateTaskDto>> = (
    dto
  ) => {
    const { id, files, ...updateTaskDto } = { ...task, ...dto };
    updateTask(updateTaskDto);
  };

  const handleCanceled = useCallback(() => {
    reset(task);
  }, [reset, task]);

  useEffect(() => {
    reset(task);
  }, [task, reset]);

  return (
    <>
      <InfoEntityModal
        title={contentMap.infoTask}
        handleClose={isDeleteModalOpen ? () => {} : handleClose}
        isOpen={isOpen}
        handleDeleteClick={isDeleteModalOpenActions.setTrue}
        copyHref={taskHref}
        errorMessage={getKeyFromUnknown(error, 'message')}
        isError={isError}
      >
        <Modal.Fieldset disabled={isLoading}>
          <SingleFieldForm
            preview={
              <TextPreview label={contentMap.title}>{title}</TextPreview>
            }
            onSubmit={handleSubmit(handleUpdateTaskField)}
            isLoading={isLoading}
            isActionDisabled={!isDirty}
            handleCanceled={handleCanceled}
            direction="vertical"
          >
            <TextInput
              label={contentMap.title}
              defaultValue={title}
              {...register('title')}
              errorMessage={errors.title?.message}
            />
          </SingleFieldForm>
          <SingleFieldForm
            preview={
              <TextPreview label={contentMap.assignee}>
                {assignee?.login}
              </TextPreview>
            }
            onSubmit={handleSubmit(handleUpdateTaskField)}
            isLoading={isLoading}
            isActionDisabled={!isDirty}
            handleCanceled={handleCanceled}
            direction="vertical"
          >
            <Select
              label={contentMap.assignee}
              {...register('userId')}
              errorMessage={errors.userId?.message}
            >
              {users?.map(({ id, login }) => (
                <option key={id} value={id}>
                  {login}
                </option>
              ))}
            </Select>
          </SingleFieldForm>
          <SingleFieldForm
            preview={
              <TextPreview label={contentMap.description}>
                <ReactMarkdown
                  unwrapDisallowed
                  allowedElements={allowedMarkdownElements}
                  linkTarget="_blank"
                  components={{
                    a: ({ href, ...props }) => (
                      <AppLink href={href!} {...props} />
                    ),
                  }}
                >
                  {description}
                </ReactMarkdown>
              </TextPreview>
            }
            onSubmit={handleSubmit(handleUpdateTaskField)}
            isLoading={isLoading}
            isActionDisabled={!isDirty}
            handleCanceled={handleCanceled}
          >
            <TextArea
              label={contentMap.description}
              defaultValue={description}
              {...register('description')}
              errorMessage={errors.description?.message}
            />
          </SingleFieldForm>
        </Modal.Fieldset>
      </InfoEntityModal>
      <DeleteTaskModal
        columnId={columnId}
        boardId={boardId}
        task={task}
        handleClose={isDeleteModalOpenActions.setFalse}
        isOpen={isDeleteModalOpen}
      />
    </>
  );
};

export { InfoTaskModal };
