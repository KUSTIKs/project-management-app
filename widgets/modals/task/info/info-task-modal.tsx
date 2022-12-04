'use client';

import { FC, useMemo } from 'react';
import { useQuery } from 'react-query';
import ReactMarkdown from 'react-markdown';

import { Task } from '@project-management-app/types';
import {
  AppLink,
  InfoEntityModal,
  TextPreview,
} from '@project-management-app/components';
import { useAppContext, useBooleanState } from '@project-management-app/hooks';
import { usersService } from '@project-management-app/services';
import { QueryKey } from '@project-management-app/enums';

import { taskModalsDictionary } from '../task-modals.dictionary';
import { DeleteTaskModal, UpdateTaskModal } from '../task-modals';

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
  task,
  boardId,
  handleClose,
  isOpen,
  columnId,
}) => {
  const { title, description } = task;
  const { locale } = useAppContext();
  const contentMap = taskModalsDictionary.getContentMap({ locale });
  const [isUpdateModalOpen, isUpdateModalOpenActions] = useBooleanState(false);
  const [isDeleteModalOpen, isDeleteModalOpenActions] = useBooleanState(false);
  const { data: assignee } = useQuery({
    queryFn: () => usersService.getById(task.userId),
    queryKey: [QueryKey.USERS, task.userId],
  });

  const taskHref = useMemo(() => {
    const boardPageUrl = new URL(`/boards/${boardId}`, location.href);

    boardPageUrl.searchParams.set('columnId', columnId);
    boardPageUrl.searchParams.set('taskId', task.id);

    const stringUrl = boardPageUrl.toString();

    return stringUrl;
  }, [boardId, columnId, task.id]);

  return (
    <>
      <InfoEntityModal
        title={contentMap.infoTask}
        handleClose={handleClose}
        isOpen={isOpen}
        handleUpdateClick={isUpdateModalOpenActions.setTrue}
        handleDeleteClick={isDeleteModalOpenActions.setTrue}
        copyHref={taskHref}
      >
        <TextPreview label={contentMap.title}>{title}</TextPreview>
        <TextPreview label={contentMap.assignee}>{assignee?.login}</TextPreview>
        <TextPreview label={contentMap.description}>
          <ReactMarkdown
            unwrapDisallowed
            allowedElements={allowedMarkdownElements}
            linkTarget="_blank"
            components={{
              a: ({ href, ...props }) => <AppLink href={href!} {...props} />,
            }}
          >
            {description}
          </ReactMarkdown>
        </TextPreview>
      </InfoEntityModal>
      <UpdateTaskModal
        columnId={columnId}
        boardId={boardId}
        task={task}
        handleClose={isUpdateModalOpenActions.setFalse}
        isOpen={isUpdateModalOpen}
      />
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
