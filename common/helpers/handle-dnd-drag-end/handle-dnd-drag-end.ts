import { Dispatch, SetStateAction } from 'react';
import { DropResult } from 'react-beautiful-dnd';

const handleDndDrugEnd = <
  K extends string,
  T extends { [Key in K]: unknown[] }
>(
  result: DropResult,
  key: K,
  setColumns: Dispatch<
    SetStateAction<{
      [key: string]: T;
    }>
  >
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  if (source.droppableId !== destination.droppableId) {
    setColumns((state) => {
      const sourceColumn = state[source.droppableId];
      const destColumn = state[destination.droppableId];

      const sourceItems = [...sourceColumn[key]];
      const destItems = [...destColumn[key]];

      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      return {
        ...state,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      };
    });
  } else {
    setColumns((state) => {
      const column = state[source.droppableId];

      const copiedItems = [...column[key]];

      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      return {
        ...state,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      };
    });
  }
};

export { handleDndDrugEnd };
