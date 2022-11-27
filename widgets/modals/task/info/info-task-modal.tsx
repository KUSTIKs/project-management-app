'use client';

import { FC } from 'react';
import { useQuery } from 'react-query';
import ReactMarkdown from 'react-markdown';

import { Task } from '@project-management-app/types';
import {
  AppLink,
  Button,
  Icon,
  Modal,
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
  const { data: assignedTo } = useQuery({
    queryFn: () => usersService.getById(task.userId),
    queryKey: [QueryKey.USERS, task.userId],
  });

  const handleUpdateModalClose = () => {
    isUpdateModalOpenActions.setFalse();
    handleClose();
  };
  const handleDeleteModalClose = () => {
    isDeleteModalOpenActions.setFalse();
    handleClose();
  };

  return (
    <>
      {!isUpdateModalOpen && !isDeleteModalOpen && (
        <Modal
          title={contentMap.infoTask}
          handleClose={handleClose}
          isOpen={isOpen}
        >
          <Modal.Actions>
            <Button
              size="s"
              variant="ghost"
              startIcon={<Icon.EditLine />}
              onClick={isUpdateModalOpenActions.setTrue}
            >
              {contentMap.update}
            </Button>
            <Button
              size="s"
              variant="ghost"
              startIcon={<Icon.BinLine />}
              onClick={isDeleteModalOpenActions.setTrue}
            >
              {contentMap.delete}
            </Button>
          </Modal.Actions>
          <Modal.Fieldset disabled>
            <TextPreview label={contentMap.assignedTo}>
              {assignedTo?.login}
            </TextPreview>
            <TextPreview label={contentMap.title}>{title}</TextPreview>
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
          </Modal.Fieldset>
        </Modal>
      )}
      <UpdateTaskModal
        columnId={columnId}
        boardId={boardId}
        task={task}
        handleClose={handleUpdateModalClose}
        isOpen={isUpdateModalOpen}
      />
      <DeleteTaskModal
        columnId={columnId}
        boardId={boardId}
        task={task}
        handleClose={handleDeleteModalClose}
        isOpen={isDeleteModalOpen}
      />
    </>
  );
};

export { InfoTaskModal };
