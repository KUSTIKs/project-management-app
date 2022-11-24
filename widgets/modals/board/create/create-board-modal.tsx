'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from 'react-query';

import {
  CreateEntityModal,
  Modal,
  TextInput,
} from '@project-management-app/components';
import { CreateBoardDto } from '@project-management-app/types';
import { boardsService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';
import { getCreateBoardSchema } from '@project-management-app/schemas';

import { boardModalsDictionary } from '../board-modals.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const CreateBoardModal: FC<Props> = ({ handleClose, isOpen }) => {
  const { locale } = useAppContext();
  const contentMap = boardModalsDictionary.getContentMap({
    locale,
  });
  const queryClient = useQueryClient();
  const {
    mutate: createBoard,
    error,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: boardsService.create,
    mutationKey: [QueryKey.BOARDS, HttpMethod.POST],
    onSuccess: () => handleCreated(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateBoardDto>({
    resolver: zodResolver(
      getCreateBoardSchema({
        locale,
      })
    ),
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleCreateBoard: SubmitHandler<CreateBoardDto> = (dto) => {
    createBoard(dto);
  };

  const handleCloseWithReset = () => {
    handleClose();
    reset();
  };

  const handleCreated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.BOARDS],
    });
    handleCloseWithReset();
  };

  return (
    <CreateEntityModal
      title={contentMap.createBoard}
      errorMessage={errorMessage}
      handleClose={handleCloseWithReset}
      isOpen={isOpen}
      handleCreate={handleSubmit(handleCreateBoard)}
      isLoading={isLoading}
      isError={isError}
    >
      <Modal.Fieldset>
        <TextInput
          label={contentMap.title}
          {...register('title')}
          errorMessage={errors.title?.message}
        />
        <TextInput
          label={contentMap.description}
          isMultiline
          {...register('description')}
          errorMessage={errors.description?.message}
        />
      </Modal.Fieldset>
    </CreateEntityModal>
  );
};

export { CreateBoardModal };
