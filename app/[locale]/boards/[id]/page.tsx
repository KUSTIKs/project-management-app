'use client';

import { FC, useEffect } from 'react';
import { useQuery } from 'react-query';

import { AppLocale } from '@project-management-app/types';
import {
  Button,
  Icon,
  Loader,
  Typography,
} from '@project-management-app/components';
import {
  CreateColumnModal,
  InfoTaskModal,
  KanbanBoard,
  UpdateBoardModal,
} from '@project-management-app/widgets';
import { boardsService, tasksService } from '@project-management-app/services';
import {
  getKeyFromUnknown,
  getValidChild,
  isString,
} from '@project-management-app/helpers';
import { useAppRouter, useBooleanState } from '@project-management-app/hooks';
import { QueryKey } from '@project-management-app/enums';

import classes from './board.module.scss';
import { boardDictionary } from './board.dictionary';

type Props = {
  params: {
    locale: AppLocale;
    id: string;
  };
  searchParams?: {
    taskId?: string;
    columnId?: string;
  };
};

const BoardPage: FC<Props> = ({ params, searchParams = {} }) => {
  const { id, locale } = params;
  const { columnId, taskId } = searchParams;
  const contentMap = boardDictionary.getContentMap({ locale });
  const router = useAppRouter();
  const {
    data: board,
    isLoading: isBoardLoading,
    error: boardError,
  } = useQuery({
    queryKey: [QueryKey.BOARDS, { id }],
    queryFn: () => boardsService.getById(id),
  });
  const {
    data: task,
    isLoading: isTaskLoading,
    isError: isTaskError,
  } = useQuery({
    queryKey: [QueryKey.TASKS, taskId],
    queryFn: () => {
      if (!isString(columnId) || !isString(taskId)) return;

      return tasksService.getById({
        boardId: id,
        columnId,
        taskId,
      });
    },
  });
  const [isUpdateOpen, isUpdateOpenActions] = useBooleanState(false);
  const [isCreateColumnModalOpen, isCreateColumnModalOpenActions] =
    useBooleanState(false);
  const [isInfoTaskModalOpen, isInfoTaskModalOpenActions] =
    useBooleanState(true);

  const isLoading = isBoardLoading || isTaskLoading;

  const handleInfoTaskModalClose = () => {
    isInfoTaskModalOpenActions.setFalse();

    const currentUrl = new URL(router.appPathname, location.href);

    currentUrl.search = router.searchParams.toString();

    currentUrl.searchParams.delete('taskId');
    currentUrl.searchParams.delete('columnId');

    router.replace(currentUrl.toString());
  };

  useEffect(() => {
    if (!task) return;

    isInfoTaskModalOpenActions.setTrue();
  }, [isInfoTaskModalOpenActions, task]);

  if (isLoading) {
    return (
      <div className={classes.container}>
        <div className={classes.loadingContainer}>
          <Loader size={24} />
        </div>
      </div>
    );
  }

  if (!board || boardError) {
    return (
      <div className={classes.container}>
        <Typography variant="largeHeadline" weight={600} colorName="text/700">
          {getValidChild(
            getKeyFromUnknown(boardError, 'message'),
            contentMap.noBoardFound
          )}
        </Typography>
      </div>
    );
  }

  if (isTaskError) {
    return (
      <div className={classes.container}>
        <Typography variant="largeHeadline" weight={600} colorName="text/700">
          {contentMap.noTaskFound}
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.topInfo}>
          <Typography variant="title1">{board.title}</Typography>
          <div className={classes.group}>
            <Button
              size="m"
              variant="ghost"
              startIcon={<Icon.EditLine />}
              onClick={isUpdateOpenActions.setTrue}
            >
              {contentMap.edit}
            </Button>
            <Button
              size="m"
              startIcon={<Icon.AddLine />}
              onClick={isCreateColumnModalOpenActions.setTrue}
            >
              {contentMap.newColumn}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.columnsWrapperContainer}>
        <KanbanBoard boardId={board.id} />
      </div>
      <CreateColumnModal
        boardId={board.id}
        handleClose={isCreateColumnModalOpenActions.setFalse}
        isOpen={isCreateColumnModalOpen}
      />
      <UpdateBoardModal
        board={board}
        handleClose={isUpdateOpenActions.setFalse}
        isOpen={isUpdateOpen}
      />
      {task && (
        <InfoTaskModal
          boardId={id}
          columnId={task.columnId}
          handleClose={handleInfoTaskModalClose}
          isOpen={isInfoTaskModalOpen}
          task={task}
        />
      )}
    </>
  );
};

export default BoardPage;
