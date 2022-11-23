'use client';

import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';

import { FullBoard, FullColumn } from '@project-management-app/types';

import { Column } from './components/components';
import classes from './kanban-board.module.scss';
import { DndDroppableId, DndType } from './enums/enums';

const DATA: FullBoard = {
  id: '9b7ce739-1bbb-52e5-adba-27282ef4fa58',
  title: 'Matilda Gill',
  description:
    'Occaecat in officia laborum exercitation proident irure dolore id.',
  columns: [
    {
      id: 'c28f9bdf-4f5d-5dab-a887-61df6a887f86',
      order: 0,
      title: 'Travis Barnett',
      tasks: [
        {
          boardId: '9b7ce739-1bbb-52e5-adba-27282ef4fa58',
          columnId: 'c28f9bdf-4f5d-5dab-a887-61df6a887f86',
          description:
            'Do pariatur officia id velit quis ullamco culpa ex veniam sint excepteur.',
          files: [],
          id: '1804bb25-2e98-5e4d-8950-71169a633043',
          order: 0,
          title: 'Jesus Mendoza',
          userId: '531b2435-262a-5975-a9b0-d4afd0104340',
        },
        {
          boardId: '9b7ce739-1bbb-52e5-adba-27282ef4fa58',
          columnId: 'c28f9bdf-4f5d-5dab-a887-61df6a887f86',
          description:
            'Nisi aute commodo tempor duis reprehenderit ut officia ipsum.',
          files: [],
          id: '57622241-9927-5f1d-a3a9-60069fcfa645',
          order: 1,
          title: 'Rachel Cummings',
          userId: '531b2435-262a-5975-a9b0-d4afd0104340',
        },
        {
          boardId: '9b7ce739-1bbb-52e5-adba-27282ef4fa58',
          columnId: 'c28f9bdf-4f5d-5dab-a887-61df6a887f86',
          description:
            'In elit quis sit anim elit sunt ut do amet sit tempor duis.',
          files: [],
          id: '9a31faba-cfb7-523b-bcf0-3643fd2d7836',
          order: 2,
          title: 'Laura Clark',
          userId: '531b2435-262a-5975-a9b0-d4afd0104340',
        },
      ],
    },
    {
      id: '13824cfb-3cd6-512b-ad5b-76b9f60a850e',
      order: 1,
      title: 'Christine Duncan',
      tasks: [
        {
          boardId: '9b7ce739-1bbb-52e5-adba-27282ef4fa58',
          columnId: '13824cfb-3cd6-512b-ad5b-76b9f60a850e',
          description:
            'Voluptate duis anim voluptate cillum velit non nostrud magna voluptate proident irure.',
          files: [],
          id: 'e7f2f66c-7169-5551-aefb-db118b658bdf',
          order: 0,
          title: 'Aiden Castillo',
          userId: '531b2435-262a-5975-a9b0-d4afd0104340',
        },
        {
          boardId: '9b7ce739-1bbb-52e5-adba-27282ef4fa58',
          columnId: '13824cfb-3cd6-512b-ad5b-76b9f60a850e',
          description:
            'Proident proident minim tempor aliqua nostrud occaecat.',
          files: [],
          id: '72091372-99f2-57d1-aecf-0d9827124e1d',
          order: 1,
          title: 'Loretta Alexander',
          userId: '531b2435-262a-5975-a9b0-d4afd0104340',
        },
        {
          boardId: '9b7ce739-1bbb-52e5-adba-27282ef4fa58',
          columnId: '13824cfb-3cd6-512b-ad5b-76b9f60a850e',
          description:
            'Dolor aliqua magna nisi officia incididunt anim ea elit aliqua occaecat laboris deserunt.',
          files: [],
          id: '66a9a4dd-7bf7-5c72-862b-e139fb8ce7a8',
          order: 2,
          title: 'Herman Pierce',
          userId: '531b2435-262a-5975-a9b0-d4afd0104340',
        },
        {
          boardId: '9b7ce739-1bbb-52e5-adba-27282ef4fa58',
          columnId: '13824cfb-3cd6-512b-ad5b-76b9f60a850e',
          description:
            'Sit labore deserunt pariatur nulla pariatur ut occaecat fugiat nostrud tempor commodo commodo voluptate.',
          files: [],
          id: 'b25230e6-820d-5145-b658-8e431c91bc53',
          order: 3,
          title: 'Jesse Hart',
          userId: '531b2435-262a-5975-a9b0-d4afd0104340',
        },
      ],
    },
  ],
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState<FullColumn[]>([]);

  const updateState = (columns: FullColumn[]) => {
    setColumns(columns.slice());
  };

  const handleDragEnd = ({ destination, source, type }: DropResult) => {
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    if (type === DndType.GROUP) {
      const workValue = [...columns];
      workValue[source.index] = columns[destination.index];
      workValue[destination.index] = columns[source.index];

      updateState(workValue);

      return;
    }

    const sourceIndex = columns.findIndex(
      ({ id }) => id === source.droppableId
    );
    const destinationIndex = columns.findIndex(
      ({ id }) => id === destination.droppableId
    );

    if (sourceIndex < 0 || destinationIndex < 0) return;

    const sourceTasks = columns[sourceIndex].tasks.slice();
    const destinationTasks =
      source.droppableId !== destination.droppableId
        ? columns[sourceIndex].tasks.slice()
        : sourceTasks;

    const [deletedTask] = sourceTasks.splice(source.index, 1);
    destinationTasks.splice(destination.index, 0, deletedTask);

    const workValue = columns.slice();
    workValue[sourceIndex] = {
      ...columns[sourceIndex],
      tasks: sourceTasks,
    };
    workValue[destinationIndex] = {
      ...columns[destinationIndex],
      tasks: destinationTasks,
    };

    updateState(workValue);
  };

  useEffect(() => {
    updateState(DATA.columns);
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId={DndDroppableId.ROOT}
        type={DndType.GROUP}
        direction="horizontal"
      >
        {(provided) => (
          <div
            className={classes.wrapper}
            {...provided.droppableProps}
            {...provided.innerRef}
            ref={provided.innerRef}
          >
            {columns.map((column, index) => (
              <Column key={column.id} column={column} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { KanbanBoard };
