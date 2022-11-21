import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from 'react-query';

import {
  Button,
  Modal,
  TextInput,
  Typography,
} from '@project-management-app/components';
import { AppLocale, CreateBoardDto } from '@project-management-app/types';
import { boardsService } from '@project-management-app/services';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';
import { QueryKey } from '@project-management-app/enums';

import { getCreateBoardSchema } from './create-board-modal.schema';
import { createBoardModalDictionary } from './create-board-modal.dictionary';

type Props = {
  locale: AppLocale;
  isOpen: boolean;
  handleClose: () => void;
};

const CreateBoardModal: FC<Props> = ({ handleClose, isOpen, locale }) => {
  const contentMap = createBoardModalDictionary.getContentMap({
    locale,
  });
  const queryClient = useQueryClient();
  const { mutate: createBoard, error } = useMutation({
    mutationFn: boardsService.create,
    mutationKey: [QueryKey.BOARDS],
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
    <Modal
      title={contentMap.createBoard}
      handleClose={handleCloseWithReset}
      isOpen={isOpen}
      onSubmit={handleSubmit(handleCreateBoard)}
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
        {isString(errorMessage) && (
          <Typography variant="text" weight={600} colorName="red/200">
            {errorMessage}
          </Typography>
        )}
      </Modal.Fieldset>
      <Button size="l">{contentMap.create}</Button>
    </Modal>
  );
};

export { CreateBoardModal };
