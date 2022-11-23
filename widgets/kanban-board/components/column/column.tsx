'use client';

import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useQuery } from 'react-query';

import { Button, Icon, Typography } from '@project-management-app/components';
import { Column as ColumnEntity } from '@project-management-app/types';
import { QueryKey } from '@project-management-app/enums';
import { tasksService } from '@project-management-app/services';
import { useAppContext, useBooleanState } from '@project-management-app/hooks';
import { CreateTaskModal } from '@project-management-app/widgets';

import { TaskCard } from '../components';
import classes from './column.module.scss';

type Props = {
  column: ColumnEntity;
  boardId: string;
  index: number;
};

const Column: FC<Props> = ({ column, index, boardId }) => {
  const { id, title } = column;
  const { locale } = useAppContext();
  const { data: tasks } = useQuery({
    queryKey: [QueryKey.TASKS, { boardId, columnId: id }],
    queryFn: () => tasksService.getAll({ boardId, columnId: id }),
  });
  const [isCreateTaskModalOpen, isCreateTaskModalOpenActions] =
    useBooleanState(false);

  return (
    <>
      <Draggable draggableId={id} key={id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Droppable droppableId={id}>
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
                    <Button symmetricPadding size="s" variant="text">
                      <Icon.InformationLine size={18} />
                    </Button>
                  </header>
                  <main className={classes.tasksWrapper}>
                    {tasks?.map((task, index) => (
                      <TaskCard key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                  </main>
                  <footer className={classes.footer}>
                    <Button
                      variant="text"
                      startIcon={<Icon.AddLine />}
                      onClick={isCreateTaskModalOpenActions.setTrue}
                    >
                      New Task
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
    </>
  );
};

export { Column };
