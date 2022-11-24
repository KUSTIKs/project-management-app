'use client';

import { FC, useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAtom } from 'jotai';

import {
  Column as ColumnEntity,
  FullBoard,
  UpdateColumnDto,
  UpdateTaskDto,
} from '@project-management-app/types';
import { QueryKey } from '@project-management-app/enums';
import { columnsService, tasksService } from '@project-management-app/services';
import { Loader, Typography } from '@project-management-app/components';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';
import { useAppContext } from '@project-management-app/hooks';

import { Column } from './components/components';
import { DndDroppableId, DndType } from './enums/enums';
import { kanbanBoardDictionary } from './kanban-board.dictionary';
import classes from './kanban-board.module.scss';
import { displayTasksMapAtom } from './helpers/helpers';

type Props = {
  boardId: string;
};

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

const KanbanBoard: FC<Props> = ({ boardId }) => {
  const { locale } = useAppContext();
  const contentMap = kanbanBoardDictionary.getContentMap({ locale });
  const queryClient = useQueryClient();
  const {
    data: columns,
    isLoading,
    error,
  } = useQuery({
    queryKey: [QueryKey.COLUMNS, { boardId }],
    queryFn: () => columnsService.getAll({ boardId }),
  });
  const { mutate: updateColumn, isLoading: isUpdatingColumn } = useMutation({
    mutationFn: ({
      columnId,
      dto,
    }: {
      columnId: string;
      dto: UpdateColumnDto;
    }) => columnsService.update({ boardId, columnId }, dto),
    onSuccess: () => handleColumnUpdated(),
  });
  const { mutate: updateTask, isLoading: isUpdatingTask } = useMutation({
    mutationFn: ({
      columnId,
      taskId,
      dto,
    }: {
      columnId: string;
      taskId: string;
      dto: UpdateTaskDto;
    }) => tasksService.update({ boardId, columnId, taskId }, dto),
    onSuccess: (data, variables) => handleTaskUpdated(variables),
  });
  const [displayColumns, setDisplayColumns] = useState<ColumnEntity[]>();
  const [displayTasksMap, setDisplayTasksMap] = useAtom(displayTasksMapAtom);

  const errorMessage = getKeyFromUnknown(error, 'message');

  const isSwapping = isUpdatingColumn || isUpdatingTask;

  const handleDragEnd = ({ destination, source, type }: DropResult) => {
    if (
      !destination ||
      !columns ||
      !displayColumns ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    if (type === DndType.GROUP) {
      const workValue = [...displayColumns];
      const sourceColumn = displayColumns[source.index];
      const destinationColumn = displayColumns[destination.index];
      workValue[source.index] = destinationColumn;
      workValue[destination.index] = sourceColumn;
      setDisplayColumns(workValue);
      updateColumn({
        columnId: sourceColumn.id,
        dto: {
          order: destinationColumn.order,
          title: sourceColumn.title,
        },
      });
      return;
    }

    const sourceColumn = displayColumns.find(
      ({ id }) => id === source.droppableId
    );
    const destinationColumn = displayColumns.find(
      ({ id }) => id === destination.droppableId
    );

    if (!sourceColumn || !destinationColumn) return;

    const sourceTasks = displayTasksMap.get(sourceColumn.id)?.slice();
    const destinationTasks =
      source.droppableId === destination.droppableId
        ? sourceTasks
        : displayTasksMap.get(destinationColumn.id)?.slice();

    if (!sourceTasks || !destinationTasks) return;

    const [movedTask] = sourceTasks.splice(source.index, 1);
    destinationTasks.splice(destination.index, 0, movedTask);

    setDisplayTasksMap((state) => {
      const workValue = new Map(state);

      workValue.set(sourceColumn.id, sourceTasks);
      workValue.set(destinationColumn.id, destinationTasks);

      return workValue;
    });

    const { id, files, ...movedTaskProps } = movedTask;
    updateTask({
      taskId: id,
      columnId: sourceColumn.id,
      dto: {
        ...movedTaskProps,
        boardId,
        columnId: destinationColumn.id,
        order: destination.index + 1,
      },
    });
  };

  const handleColumnUpdated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.COLUMNS],
    });
  };
  const handleTaskUpdated = (variables: {
    columnId: string;
    dto: UpdateTaskDto;
  }) => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS, { columnId: variables.columnId }],
    });
    queryClient.invalidateQueries({
      queryKey: [QueryKey.TASKS, { columnId: variables.dto.columnId }],
    });
  };

  useEffect(() => {
    setDisplayColumns(columns?.slice().sort((a, b) => a.order - b.order));
  }, [columns]);

  if (isLoading) {
    return (
      <div className={classes.container}>
        <div className={classes.loadingContainer}>
          <Loader size={24} />
        </div>
      </div>
    );
  }

  if (!columns || columns.length === 0 || error) {
    return (
      <div className={classes.container}>
        <Typography variant="largeHeadline" weight={600} colorName="text/700">
          {isString(errorMessage) ? errorMessage : contentMap.noColumns}
        </Typography>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable
        droppableId={DndDroppableId.ROOT}
        type={DndType.GROUP}
        direction="horizontal"
        isDropDisabled={isSwapping}
      >
        {(provided) => (
          <div
            className={classes.wrapper}
            {...provided.droppableProps}
            {...provided.innerRef}
            ref={provided.innerRef}
          >
            {displayColumns?.map((column, index) => (
              <Column
                key={column.id}
                column={column}
                boardId={boardId}
                index={index}
                isSwapping={isSwapping}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export { KanbanBoard };
