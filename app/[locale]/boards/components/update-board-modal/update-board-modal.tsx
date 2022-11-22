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
import {
  AppLocale,
  Board,
  UpdateBoardDto,
} from '@project-management-app/types';
import { boardsService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import { HttpMethod, QueryKey } from '@project-management-app/enums';

import { getCreateBoardSchema } from '../create-board-modal/create-board-modal.schema';
import { updateBoardModalDictionary } from './update-board-modal.dictionary';

type Props = {
  locale: AppLocale;
  isOpen: boolean;
  handleClose: () => void;
  board: Board;
};

const UpdateBoardModal: FC<Props> = ({
  handleClose,
  isOpen,
  locale,
  board,
}) => {
  const contentMap = updateBoardModalDictionary.getContentMap({
    locale,
  });
  const queryClient = useQueryClient();
  const {
    mutate: updateBoard,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (dto: UpdateBoardDto) => boardsService.update(board.id, dto),
    mutationKey: [QueryKey.BOARDS, HttpMethod.PUT],
    onSuccess: () => handleUpdated(),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<UpdateBoardDto>({
    resolver: zodResolver(
      getCreateBoardSchema({
        locale,
      })
    ),
    defaultValues: board,
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleUpdateBoard: SubmitHandler<UpdateBoardDto> = (dto) => {
    updateBoard(dto);
  };

  const handleCloseWithReset = () => {
    handleClose();
    reset();
  };

  const handleUpdated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.BOARDS],
    });
    handleCloseWithReset();
  };

  useEffect(() => {
    reset(board);
  }, [board, reset]);

  return (
    <UpdateEntityModal
      withQuotes
      locale={locale}
      title={contentMap.updateBoard}
      errorMessage={errorMessage}
      handleClose={handleCloseWithReset}
      isOpen={isOpen}
      handleUpdate={handleSubmit(handleUpdateBoard)}
      isLoading={isLoading}
      isActionDisabled={!isDirty}
    >
      <Modal.Fieldset>
        <TextInput
          label={contentMap.title}
          {...register('title')}
          variant="unfilled"
          errorMessage={errors.title?.message}
        />
        <TextInput
          label={contentMap.description}
          isMultiline
          {...register('description')}
          variant="unfilled"
          errorMessage={errors.description?.message}
        />
      </Modal.Fieldset>
    </UpdateEntityModal>
  );
};

export { UpdateBoardModal };
