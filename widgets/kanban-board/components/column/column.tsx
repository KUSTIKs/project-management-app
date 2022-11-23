'use client';

import { FC, useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useQuery } from 'react-query';

import { Button, Icon, Typography } from '@project-management-app/components';
import {
  AppLocale,
  Column as ColumnEntity,
} from '@project-management-app/types';
import { QueryKey } from '@project-management-app/enums';
import { tasksService } from '@project-management-app/services';

import { CreateTaskModal, TaskCard } from '../components';
import classes from './column.module.scss';

type Props = {
  column: ColumnEntity;
  boardId: string;
  index: number;
  locale: AppLocale;
};

const Column: FC<Props> = ({ column, index, boardId, locale }) => {
  const { id, title } = column;
  const { data: tasks } = useQuery({
    queryKey: [QueryKey.TASKS, { boardId, columnId: id }],
    queryFn: () => tasksService.getAll({ boardId, columnId: id }),
  });
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  const openCreateTaskModal = () => {
    setIsCreateTaskModalOpen(true);
  };
  const closeCreateTaskModal = () => {
    setIsCreateTaskModalOpen(false);
  };

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
                      onClick={openCreateTaskModal}
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
        handleClose={closeCreateTaskModal}
        isOpen={isCreateTaskModalOpen}
        locale={locale}
      />
    </>
  );
};

export { Column };
