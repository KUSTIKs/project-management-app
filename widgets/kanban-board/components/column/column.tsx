'use client';

import { FC } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { Button, Icon, Typography } from '@project-management-app/components';
import { FullColumn } from '@project-management-app/types';

import { TaskCard } from '../components';
import classes from './column.module.scss';

type Props = {
  column: FullColumn;
  index: number;
};

const Column: FC<Props> = ({ column, index }) => {
  const { id, tasks, title } = column;

  return (
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
                  {tasks.map((task, index) => (
                    <TaskCard key={task.id} task={task} index={index} />
                  ))}
                  {provided.placeholder}
                </main>
                <footer className={classes.footer}>
                  <Button variant="text" startIcon={<Icon.AddLine />}>
                    New Task
                  </Button>
                </footer>
              </article>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export { Column };
