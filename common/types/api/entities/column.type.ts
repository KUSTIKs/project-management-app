import { Task } from './task.type';

type Column = {
  id: string;
  title: string;
  order: number;
};

type FullColumn = Column & {
  tasks: Task[];
};

export type { Column, FullColumn };
