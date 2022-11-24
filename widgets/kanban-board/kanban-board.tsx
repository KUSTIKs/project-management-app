'use client';

import { FC, useEffect, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useAtom } from 'jotai';

import {
  Column as ColumnEntity,
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
      const sourceColumn = displayColumns[source.index];
      const destinationColumn = displayColumns[destination.index];

      const workValue = [...displayColumns];

      const [movedColumn] = workValue.splice(source.index, 1);
      workValue.splice(destination.index, 0, movedColumn);

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
