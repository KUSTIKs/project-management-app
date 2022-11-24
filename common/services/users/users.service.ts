import { HttpMethod } from '@project-management-app/enums';
import { appFetch } from '@project-management-app/helpers';
import { ApiError, User, UpdateUserDto } from '@project-management-app/types';

class UsersService {
  async getAll() {
    const response = await appFetch('/users');

    if (response.ok) {
      const data: User[] = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async getById(id: string) {
    const response = await appFetch(`/users/${id}`);
    const data: User = await response.json();

    return data;
  }

  async delete(id: string) {
    const response = await appFetch(`/users/${id}`, {
      method: HttpMethod.DELETE,
    });

    if (!response.ok) {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async update(id: string, dto: UpdateUserDto) {
    const response = await appFetch(`/users/${id}`, {
      body: JSON.stringify(dto),
      method: HttpMethod.PUT,
    });

    if (response.ok) {
      const data: User = await response.json();

      return data;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }
}

const usersService = new UsersService();

export { usersService };
