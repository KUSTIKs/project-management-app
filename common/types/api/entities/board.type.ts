import { FullColumn } from './column.type';

type Board = {
  id: string;
  title: string;
  description: string;
};

type FullBoard = Board & {
  columns: FullColumn[];
};

export type { Board, FullBoard };
