'use client';

import { FC, useCallback, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Column, UpdateColumnDto } from '@project-management-app/types';
import {
  InfoEntityModal,
  Modal,
  SingleFieldForm,
  TextInput,
  TextPreview,
} from '@project-management-app/components';
import { useAppContext, useBooleanState } from '@project-management-app/hooks';
import { columnsService } from '@project-management-app/services';
import { QueryKey } from '@project-management-app/enums';
import { getUpdateColumnSchema } from '@project-management-app/schemas';
import { getKeyFromUnknown } from '@project-management-app/helpers';

import { columnModalsDictionary } from '../column-modals.dictionary';
import { DeleteColumnModal } from '../column-modals';

type Props = {
  column: Column;
  boardId: string;
  isOpen: boolean;
  handleClose: () => void;
};

const InfoColumnModal: FC<Props> = ({
  column: initialColumn,
  boardId,
  handleClose,
  isOpen,
}) => {
  const { locale } = useAppContext();
  const contentMap = columnModalsDictionary.getContentMap({ locale });
  const queryClient = useQueryClient();
  const [isDeleteModalOpen, isDeleteModalOpenActions] = useBooleanState(false);
  const { data: columnData } = useQuery({
    queryKey: [QueryKey.COLUMNS, initialColumn.id],
    initialData: initialColumn,
    queryFn: () =>
      columnsService.getById({
        boardId: boardId,
        columnId: initialColumn.id,
      }),
  });
  const column = columnData!;
  const {
    mutate: updateColumn,
    error,
    isLoading,
    isError,
  } = useMutation({
    mutationFn: (dto: UpdateColumnDto) =>
      columnsService.update({ columnId: column.id, boardId }, dto),
    onSuccess: () => handleUpdated(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateColumnDto>({
    resolver: zodResolver(
      getUpdateColumnSchema({
        locale,
      })
    ),
    defaultValues: column,
  });

  const { title } = column;

  const handleUpdated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.COLUMNS],
    });
  };

  const handleUpdateColumnField: SubmitHandler<Partial<UpdateColumnDto>> = (
    dto
  ) => {
    const { order, title } = dto;
    updateColumn({
      order: order ?? column.order,
      title: title ?? column.title,
    });
  };

  const handleCanceled = useCallback(() => {
    reset(column);
  }, [reset, column]);

  useEffect(() => {
    reset(column);
  }, [column, reset]);

  return (
    <>
      <InfoEntityModal
        title={contentMap.infoColumn}
        handleClose={isDeleteModalOpen ? () => {} : handleClose}
        isOpen={isOpen}
        handleDeleteClick={isDeleteModalOpenActions.setTrue}
        errorMessage={getKeyFromUnknown(error, 'message')}
        isError={isError}
      >
        <Modal.Fieldset disabled={isLoading}>
          <SingleFieldForm
            preview={
              <TextPreview label={contentMap.title}>{title}</TextPreview>
            }
            onSubmit={handleSubmit(handleUpdateColumnField)}
            isLoading={isLoading}
            isActionDisabled={!isDirty}
            handleCanceled={handleCanceled}
          >
            <TextInput
              label={contentMap.title}
              defaultValue={title}
              {...register('title')}
              errorMessage={errors.title?.message}
            />
          </SingleFieldForm>
        </Modal.Fieldset>
      </InfoEntityModal>
      <DeleteColumnModal
        boardId={boardId}
        column={column}
        handleClose={isDeleteModalOpenActions.setFalse}
        isOpen={isDeleteModalOpen}
      />
    </>
  );
};

export { InfoColumnModal };
