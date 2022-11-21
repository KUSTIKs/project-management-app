import { FC, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import {
  BoardCard as StatelessBoardCard,
  DeleteEntityModal,
} from '@project-management-app/components';
import { AppLocale, Board } from '@project-management-app/types';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { boardsService } from '@project-management-app/services';

type Props = Board & {
  locale: AppLocale;
};

const BoardCard: FC<Props> = ({ id, title, description, locale }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteBoard, isLoading } = useMutation({
    mutationKey: [QueryKey.BOARDS, HttpMethod.DELETE],
    mutationFn: () => boardsService.delete(id),
    onSuccess: () => handleDeleted(),
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleted = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.BOARDS],
    });
  };

  return (
    <>
      <DeleteEntityModal
        entityName={title}
        handleDelete={deleteBoard}
        isLoading={isLoading}
        locale={locale}
        handleClose={closeDeleteModal}
        isOpen={isDeleteModalOpen}
      />
      <StatelessBoardCard
        title={title}
        description={description}
        handleDelete={openDeleteModal}
      />
    </>
  );
};

export { BoardCard };
