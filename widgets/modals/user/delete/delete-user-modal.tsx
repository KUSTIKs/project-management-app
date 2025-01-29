'use client';

import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Cookies from 'js-cookie';

import { DeleteEntityModal } from '@project-management-app/components';
import { User } from '@project-management-app/types';
import { usersService } from '@project-management-app/services';
import { getKeyFromUnknown } from '@project-management-app/helpers';
import {
  CookieName,
  HttpMethod,
  QueryKey,
} from '@project-management-app/enums';
import { useAppContext, useAppRouter } from '@project-management-app/hooks';

import { userModalsDictionary } from '../user-modals.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  user: User;
};

const DeleteUserModal: FC<Props> = ({ handleClose, isOpen, user }) => {
  const { locale } = useAppContext();
  const contentMap = userModalsDictionary.getContentMap({ locale });
  const queryClient = useQueryClient();
  const router = useAppRouter();
  const {
    mutate: deleteUser,
    isLoading,
    isError,
    error,
  } = useMutation({
    mutationKey: [QueryKey.USERS, HttpMethod.DELETE],
    mutationFn: () => usersService.delete(user.id),
    onSuccess: () => handleDeleted(),
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  const handleDeleted = () => {
    Cookies.remove(CookieName.NEXT_TOKEN);

    queryClient.invalidateQueries({
      queryKey: [QueryKey.USERS],
    });

    handleClose();

    router.push('/');
    router.refresh();
  };

  return (
    <DeleteEntityModal
      title={contentMap.deleteAccount}
      entityName={contentMap.yourAccount}
      handleDelete={deleteUser}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
      handleClose={handleClose}
      isOpen={isOpen}
    />
  );
};

export { DeleteUserModal };
