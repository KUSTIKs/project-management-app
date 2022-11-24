import { atom } from 'jotai';

import { Task } from '@project-management-app/types';

const displayTasksMapAtom = atom<Map<string, Task[] | undefined>>(new Map());
const tasksMapAtom = atom<Map<string, Task[] | undefined>>(new Map());

export { displayTasksMapAtom, tasksMapAtom };
