'use client';

import { FC, useEffect } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useQuery } from 'react-query';
import { useAtom } from 'jotai';

import { Button, Icon, Typography } from '@project-management-app/components';
import { Column as ColumnEntity } from '@project-management-app/types';
import { useAppContext, useBooleanState } from '@project-management-app/hooks';
import {
  CreateTaskModal,
  InfoColumnModal,
} from '@project-management-app/widgets';
import { QueryKey } from '@project-management-app/enums';
import { tasksService } from '@project-management-app/services';

import { displayTasksMapAtom } from '../../helpers/helpers';
import { TaskCard } from '../components';
import classes from './column.module.scss';
import { columnDictionary } from './column.dictionary';

type Props = {
  column: ColumnEntity;
  boardId: string;
  index: number;
  isSwapping: boolean;
};

const Column: FC<Props> = ({ column, index, boardId, isSwapping }) => {
  const { id, title } = column;
  const { locale } = useAppContext();
  const contentMap = columnDictionary.getContentMap({ locale });
  const { data: tasks } = useQuery({
    queryKey: [QueryKey.TASKS, { columnId: id }],
    queryFn: () => tasksService.getAll({ boardId, columnId: id }),
  });
  const [isCreateTaskModalOpen, isCreateTaskModalOpenActions] =
    useBooleanState(false);
  const [isInfoModalOpen, isInfoModalOpenActions] = useBooleanState(false);
  const [displayTasksMap, setDisplayTasksMap] = useAtom(displayTasksMapAtom);

  useEffect(() => {
    setDisplayTasksMap((state) => {
      const workValue = new Map(state);
      workValue.set(
        id,
        tasks?.slice().sort((a, b) => a.order - b.order)
      );
      return workValue;
    });
  }, [id, setDisplayTasksMap, tasks]);

  return (
    <>
      <Draggable
        draggableId={id}
        key={id}
        index={index}
        isDragDisabled={isSwapping}
      >
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Droppable droppableId={id} isDropDisabled={isSwapping}>
              {(provided) => (
                <article
                  className={classes.column}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <header className={classes.header}>
                    <Typography
                      variant="largeHeadline"
                      weight={600}
                      colorName="text/300"
                      className={classes.title}
                    >
                      {title}
                    </Typography>
                    <Button
                      symmetricPadding
                      size="s"
                      variant="text"
                      onClick={isInfoModalOpenActions.setTrue}
                    >
                      <Icon.InformationLine size={18} />
                    </Button>
                  </header>
                  <main className={classes.tasksWrapper}>
                    {displayTasksMap.get(id)?.map((task, index) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        boardId={boardId}
                        columnId={id}
                        index={index}
                        isSwapping={isSwapping}
                      />
                    ))}
                    {provided.placeholder}
                  </main>
                  <footer className={classes.footer}>
                    <Button
                      variant="text"
                      startIcon={<Icon.AddLine />}
                      onClick={isCreateTaskModalOpenActions.setTrue}
                    >
                      {contentMap.newTask}
                    </Button>
                  </footer>
                </article>
              )}
            </Droppable>
          </div>
        )}
      </Draggable>
      <CreateTaskModal
        boardId={boardId}
        columnId={id}
        handleClose={isCreateTaskModalOpenActions.setFalse}
        isOpen={isCreateTaskModalOpen}
      />
      <InfoColumnModal
        column={column}
        boardId={boardId}
        handleClose={isInfoModalOpenActions.setFalse}
        isOpen={isInfoModalOpen}
      />
    </>
  );
};

export { Column };
