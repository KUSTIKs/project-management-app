'use client';

import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from 'react-query';

import {
  CreateEntityModal,
  TextInput,
} from '@project-management-app/components';
import { CreateColumnDto } from '@project-management-app/types';
import { columnsService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';

import { columnModalsDictionary } from '../column-modals.dictionary';
import { getCreateColumnSchema } from 'common/schemas/column/create-column-schema';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  boardId: string;
};

const CreateColumnModal: FC<Props> = ({ handleClose, isOpen, boardId }) => {
  const { locale } = useAppContext();
  const contentMap = columnModalsDictionary.getContentMap({
    locale,
  });
  const queryClient = useQueryClient();
  const {
    mutate: createColumn,
    error,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: (dto: CreateColumnDto) =>
      columnsService.create({ boardId }, dto),
    mutationKey: [QueryKey.COLUMNS, HttpMethod.POST],
    onSuccess: () => handleCreated(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateColumnDto>({
    resolver: zodResolver(
      getCreateColumnSchema({
        locale,
      })
    ),
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleCreateColumn: SubmitHandler<CreateColumnDto> = (dto) => {
    createColumn(dto);
  };

  const handleCloseWithReset = () => {
    handleClose();
    reset();
  };

  const handleCreated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.COLUMNS],
    });
    handleCloseWithReset();
  };

  return (
    <CreateEntityModal
      title={contentMap.createColumn}
      errorMessage={errorMessage}
      handleClose={handleCloseWithReset}
      isOpen={isOpen}
      handleCreate={handleSubmit(handleCreateColumn)}
      isLoading={isLoading}
      isError={isError}
    >
      <TextInput
        label={contentMap.title}
        {...register('title')}
        errorMessage={errors.title?.message}
      />
    </CreateEntityModal>
  );
};

export { CreateColumnModal };
