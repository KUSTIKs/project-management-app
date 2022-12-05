import { HttpMethod } from '@project-management-app/enums';
import { appFetch } from '@project-management-app/helpers';
import { ApiError, CreateFileDto } from '@project-management-app/types';

class FilesService {
  async create(dto: CreateFileDto) {
    const formData = new FormData();
    formData.append('file', dto.file);
    formData.append('taskId', dto.taskId);

    const response = await appFetch(`/file`, {
      body: formData,
      method: HttpMethod.POST,
    });

    if (response.ok) {
      const message: string = await response.text();

      return message;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async getByName({ taskId, filename }: { taskId: string; filename: string }) {
    const response = await appFetch(`/file/${taskId}/${filename}`);

    if (response.ok) {
      const image = await response.blob();

      return image;
    } else {
      const error: ApiError = await response.json();

      throw error;
    }
  }

  async delete({ taskId, filename }: { taskId: string; filename: string }) {
    const response = await appFetch(`/file/${taskId}/${filename}`, {
      method: HttpMethod.DELETE,
    });

    if (!response.ok) {
      const error: ApiError = await response.json();

      throw error;
    }
  }
}

const filesService = new FilesService();

export { filesService };
