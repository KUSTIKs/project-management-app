'use client';

import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { Typography } from '@project-management-app/components';
import { Task } from '@project-management-app/types';

import classes from './task-card.module.scss';

type Props = {
  task: Task;
  index: number;
};

const TaskCard: FC<Props> = ({ task, index }) => {
  const { id, title, description } = task;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={classes.wrapper}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Typography variant="headline" colorName="text/300" weight={600}>
            {title}
          </Typography>
          <Typography variant="text" colorName="text/600" weight={500}>
            {description}
          </Typography>
        </div>
      )}
    </Draggable>
  );
};

export { TaskCard };
