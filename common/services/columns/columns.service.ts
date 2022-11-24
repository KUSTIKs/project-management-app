import { HttpMethod } from '@project-management-app/enums';
import { appFetch } from '@project-management-app/helpers';
import {
  ApiError,
  Column,
  CreateColumnDto,
  FullColumn,
  UpdateColumnDto,
} from '@project-management-app/types';

import { tasksService } from '../tasks/tasks.service';

class ColumnsService {
  async getAll({ boardId }: { boardId: string }) {
    const response = await appFetch(`/boards/${boardId}/columns`);

    if (response.ok) {
      const data: Column[] = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async getAllFull({ boardId }: { boardId: string }) {
    const columns = await this.getAll({ boardId });
    const fullColumns: FullColumn[] = await Promise.all(
      columns.map(async (column) => ({
        ...column,
        tasks: await tasksService.getAll({
          boardId,
          columnId: column.id,
        }),
      }))
    );

    return fullColumns;
  }

  async create({ boardId }: { boardId: string }, dto: CreateColumnDto) {
    const response = await appFetch(`/boards/${boardId}/columns`, {
      body: JSON.stringify(dto),
      method: HttpMethod.POST,
    });

    if (response.ok) {
      const data: Column = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async getById({ boardId, columnId }: { boardId: string; columnId: string }) {
    const response = await appFetch(`/boards/${boardId}/columns/${columnId}`);

    if (response.ok) {
      const data: Column = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async delete({ boardId, columnId }: { boardId: string; columnId: string }) {
    const response = await appFetch(`/boards/${boardId}/columns/${columnId}`, {
      method: HttpMethod.DELETE,
    });

    if (!response.ok) {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async update(
    { boardId, columnId }: { boardId: string; columnId: string },
    dto: UpdateColumnDto
  ) {
    const response = await appFetch(`/boards/${boardId}/columns/${columnId}`, {
      body: JSON.stringify(dto),
      method: HttpMethod.PUT,
    });

    if (response.ok) {
      const data: Column = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }
}

const columnsService = new ColumnsService();

export { columnsService };
