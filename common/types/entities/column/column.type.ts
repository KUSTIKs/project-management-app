import { Task } from '../entities';

type Column = {
  id: string;
  title: string;
  order: number;
};

type FullColumn = Column & {
  tasks: Task[];
};

export type { Column, FullColumn };
