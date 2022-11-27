'use client';

import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ReactMarkdown from 'react-markdown';

import { Typography } from '@project-management-app/components';
import { Task } from '@project-management-app/types';
import { useBooleanState } from '@project-management-app/hooks';
import { InfoTaskModal } from '@project-management-app/widgets';

import classes from './task-card.module.scss';

type Props = {
  task: Task;
  columnId: string;
  boardId: string;
  index: number;
  isSwapping: boolean;
};

const TaskCard: FC<Props> = ({
  task,
  index,
  boardId,
  columnId,
  isSwapping,
}) => {
  const { id, title, description } = task;
  const [isInfoModalOpen, isInfoModalOpenActions] = useBooleanState(false);

  return (
    <>
      <Draggable draggableId={id} index={index} isDragDisabled={isSwapping}>
        {(provided) => (
          <div
            className={classes.wrapper}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={isInfoModalOpenActions.setTrue}
          >
            <Typography variant="headline" colorName="text/300" weight={600}>
              {title}
            </Typography>
            <Typography
              variant="text"
              colorName="text/600"
              weight={500}
              className={classes.description}
            >
              <ReactMarkdown allowedElements={[]} unwrapDisallowed>
                {description}
              </ReactMarkdown>
            </Typography>
          </div>
        )}
      </Draggable>
      <InfoTaskModal
        task={task}
        boardId={boardId}
        columnId={columnId}
        handleClose={isInfoModalOpenActions.setFalse}
        isOpen={isInfoModalOpen}
      />
    </>
  );
};

export { TaskCard };
