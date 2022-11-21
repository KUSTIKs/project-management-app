import { HttpMethod } from '@project-management-app/enums';
import { appFetch } from '@project-management-app/helpers';
import {
  ApiError,
  Board,
  CreateBoardDto,
  UpdateBoardDto,
} from '@project-management-app/types';

class BoardsService {
  async getAll() {
    const response = await appFetch('/boards');

    if (response.ok) {
      const data: Board[] = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async create(dto: CreateBoardDto) {
    const response = await appFetch('/boards', {
      body: JSON.stringify(dto),
      method: HttpMethod.POST,
    });

    if (response.ok) {
      const data: Board = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async getById(id: string) {
    const response = await appFetch(`/boards/${id}`);
    const data: Board = await response.json();

    return data;
  }

  async delete(id: string) {
    const response = await appFetch(`/boards/${id}`, {
      method: HttpMethod.DELETE,
    });

    if (!response.ok) {
      const error: ApiError = await response.json();

      throw error;
    }

    return;
  }

  async update(id: string, dto: UpdateBoardDto) {
    const response = await appFetch(`/boards/${id}`, {
      body: JSON.stringify(dto),
      method: HttpMethod.PUT,
    });
    const data = await response.json();

    if (!response.ok) {
      throw data as ApiError;
    }

    return data as Board;
  }
}

const boardsService = new BoardsService();

export { boardsService };
