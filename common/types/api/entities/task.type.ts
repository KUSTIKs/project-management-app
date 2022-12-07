import { File } from './file.type';

type Task = {
  id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: File[];
};

export type { Task };
