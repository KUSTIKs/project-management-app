import { HttpMethod } from '@project-management-app/enums';
import { appFetch } from '@project-management-app/helpers';
import {
  ApiError,
  Column,
  CreateColumnDto,
  UpdateColumnDto,
} from '@project-management-app/types';

class ColumnsService {
  async getAll({ boardId }: { boardId: string }) {
    const response = await appFetch(`/boards/${boardId}/columns`);
    const data: Column[] = await response.json();

    return data;
  }

  async create({ boardId }: { boardId: string }, dto: CreateColumnDto) {
    const response = await appFetch(`/boards/${boardId}/columns`, {
      body: JSON.stringify(dto),
      method: HttpMethod.POST,
    });
    const data: Column[] = await response.json();

    return data;
  }

  async getById({ boardId, columnId }: { boardId: string; columnId: string }) {
    const response = await appFetch(`/boards/${boardId}/columns/${columnId}`);
    const data: Column = await response.json();

    return data;
  }

  async delete({ boardId, columnId }: { boardId: string; columnId: string }) {
    const response = await appFetch(`/boards/${boardId}/columns/${columnId}`, {
      method: HttpMethod.DELETE,
    });

    if (!response.ok) {
      const error: ApiError = await response.json();

      throw error;
    }

    return;
  }

  async update(
    { boardId, columnId }: { boardId: string; columnId: string },
    dto: UpdateColumnDto
  ) {
    const response = await appFetch(`/boards/${boardId}/columns/${columnId}`, {
      body: JSON.stringify(dto),
      method: HttpMethod.PUT,
    });
    const data = await response.json();

    if (!response.ok) {
      throw data as ApiError;
    }

    return data as Column;
  }
}

const columnsService = new ColumnsService();

export { columnsService };
