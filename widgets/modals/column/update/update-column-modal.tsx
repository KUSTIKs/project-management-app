'use client';

import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from 'react-query';

import {
  Modal,
  TextInput,
  UpdateEntityModal,
} from '@project-management-app/components';
import { Column, UpdateColumnDto } from '@project-management-app/types';
import { columnsService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';
import { useAppContext } from '@project-management-app/hooks';

import { getCreateColumnSchema } from '../create/create-column-modal.schema';
import { columnModalsDictionary } from '../column-modals.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  column: Column;
  boardId: string;
};

const UpdateColumnModal: FC<Props> = ({
  handleClose,
  isOpen,
  column,
  boardId,
}) => {
  const { locale } = useAppContext();
  const contentMap = columnModalsDictionary.getContentMap({
    locale,
  });
  const queryClient = useQueryClient();
  const {
    mutate: updateColumn,
    error,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: (dto: UpdateColumnDto) =>
      columnsService.update({ columnId: column.id, boardId }, dto),
    mutationKey: [QueryKey.COLUMNS, HttpMethod.PUT],
    onSuccess: () => handleUpdated(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateColumnDto>({
    resolver: zodResolver(
      getCreateColumnSchema({
        locale,
      })
    ),
    defaultValues: column,
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleUpdateColumn: SubmitHandler<Partial<UpdateColumnDto>> = (dto) => {
    const { id, ...columnProps } = column;
    updateColumn({ ...columnProps, ...dto });
  };

  const handleCloseWithReset = () => {
    handleClose();
    reset();
  };

  const handleUpdated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.COLUMNS],
    });
    handleCloseWithReset();
  };

  useEffect(() => {
    reset(column);
  }, [column, reset]);

  return (
    <UpdateEntityModal
      withQuotes
      title={contentMap.updateColumn}
      errorMessage={errorMessage}
      handleClose={handleCloseWithReset}
      isOpen={isOpen}
      handleUpdate={handleSubmit(handleUpdateColumn)}
      isLoading={isLoading}
      isError={isError}
      isActionDisabled={!isDirty}
    >
      <Modal.Fieldset>
        <TextInput
          label={contentMap.title}
          {...register('title')}
          errorMessage={errors.title?.message}
        />
      </Modal.Fieldset>
    </UpdateEntityModal>
  );
};

export { UpdateColumnModal };
