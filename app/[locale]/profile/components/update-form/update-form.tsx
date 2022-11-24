import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from 'react-query';

import { UpdateUserDto, User } from '@project-management-app/types';
import { useAppContext } from '@project-management-app/hooks';
import {
  Button,
  TextInput,
  Typography,
} from '@project-management-app/components';
import { usersService } from '@project-management-app/services';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';
import { QueryKey } from '@project-management-app/enums';
import { getUpdateUserSchema } from '@project-management-app/schemas';

import { profileDictionary } from '../../profile.dictionary';
import classes from '../../profile.module.scss';

type Props = {
  user: User;
  exitUpdatingMode: () => void;
};

const UpdateForm: FC<Props> = ({ user, exitUpdatingMode }) => {
  const { locale } = useAppContext();
  const contentMap = profileDictionary.getContentMap({ locale });
  const queryClient = useQueryClient();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<UpdateUserDto>({
    resolver: zodResolver(
      getUpdateUserSchema({
        locale,
      })
    ),
  });
  const {
    mutate: updateUser,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (dto: UpdateUserDto) => usersService.update(user.id, dto),
    onSuccess: () => handleUpdated(),
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleUpdateUser: SubmitHandler<UpdateUserDto> = (dto) => {
    updateUser(dto);
  };

  const handleUpdated = () => {
    queryClient.invalidateQueries({
      queryKey: [QueryKey.USERS, user.id],
    });
    exitUpdatingMode();
  };

  useEffect(() => {
    reset({
      ...user,
      password: '',
    });
  }, [reset, user]);

  return (
    <form className={classes.wrapper} onSubmit={handleSubmit(handleUpdateUser)}>
      <fieldset className={classes.fieldset} disabled={isLoading}>
        <TextInput
          label={contentMap.name}
          {...register('name')}
          errorMessage={errors.name?.message}
        />
        <TextInput
          label={contentMap.login}
          {...register('login')}
          errorMessage={errors.login?.message}
        />
        <TextInput
          label={contentMap.password}
          {...register('password')}
          errorMessage={errors.password?.message}
        />
        {isString(errorMessage) && (
          <Typography variant="text" weight={600} colorName="red/200">
            {errorMessage}
          </Typography>
        )}
      </fieldset>
      <Button
        size="l"
        isDisabled={!isDirty}
        isLoading={isLoading}
        type="submit"
      >
        {contentMap.update}
      </Button>
    </form>
  );
};

export { UpdateForm };
