import { HttpMethod } from '@project-management-app/enums';
import { appFetch } from '@project-management-app/helpers';
import {
  ApiError,
  Task,
  CreateTaskDto,
  UpdateTaskDto,
} from '@project-management-app/types';

class TasksService {
  async getAll({ boardId, columnId }: { boardId: string; columnId: string }) {
    const response = await appFetch(
      `/boards/${boardId}/columns/${columnId}/tasks`
    );
    const data: Task[] = await response.json();

    return data;
  }

  async create(
    { boardId, columnId }: { boardId: string; columnId: string },
    dto: CreateTaskDto
  ) {
    const response = await appFetch(
      `/boards/${boardId}/columns/${columnId}/tasks`,
      {
        body: JSON.stringify(dto),
        method: HttpMethod.POST,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data: Task[] = await response.json();

    return data;
  }

  async getById({
    boardId,
    taskId,
    columnId,
  }: {
    boardId: string;
    taskId: string;
    columnId: string;
  }) {
    const response = await appFetch(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`
    );
    const data: Task = await response.json();

    return data;
  }

  async delete({
    boardId,
    taskId,
    columnId,
  }: {
    boardId: string;
    taskId: string;
    columnId: string;
  }) {
    const response = await appFetch(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      {
        method: HttpMethod.DELETE,
      }
    );

    if (!response.ok) {
      const error: ApiError = await response.json();

      throw error;
    }

    return;
  }

  async update(
    {
      boardId,
      taskId,
      columnId,
    }: {
      boardId: string;
      taskId: string;
      columnId: string;
    },
    dto: UpdateTaskDto
  ) {
    const response = await appFetch(
      `/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      {
        body: JSON.stringify(dto),
        method: HttpMethod.PUT,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw data as ApiError;
    }

    return data as Task;
  }
}

const tasksService = new TasksService();

export { tasksService };
