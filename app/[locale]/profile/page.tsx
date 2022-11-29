'use client';

import { FC } from 'react';
import { useQuery } from 'react-query';

import {
  Button,
  Icon,
  Loader,
  Typography,
} from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import { useAppContext, useBooleanState } from '@project-management-app/hooks';
import { usersService } from '@project-management-app/services';
import { QueryKey } from '@project-management-app/enums';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';

import classes from './profile.module.scss';
import { profileDictionary } from './profile.dictionary';
import { UpdateForm, UserPreview } from './components/components';
import { DeleteUserModal } from 'widgets/modals/user/user-modals';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const ProfilePage: FC<Props> = ({ params }) => {
  const { locale } = params;
  const { payload } = useAppContext();
  const contentMap = profileDictionary.getContentMap({ locale });
  const [isUpdating, isUpdatingActions] = useBooleanState(false);
  const [isDeleteModalOpen, isDeleteModalOpenActions] = useBooleanState(false);
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => usersService.getById(payload!.userId),
    queryKey: [QueryKey.USERS, payload!.userId],
  });

  const errorMessage = getKeyFromUnknown(error, 'message');

  if (isLoading) {
    return (
      <div className={classes.container}>
        <div className={classes.loadingContainer}>
          <Loader size={24} />
        </div>
      </div>
    );
  }

  if (!user || error) {
    return (
      <div className={classes.container}>
        <Typography variant="largeHeadline" weight={600} colorName="text/700">
          {isString(errorMessage) ? errorMessage : contentMap.somethingWrong}
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.topInfo}>
            <Typography variant="title1" weight={700}>
              {contentMap.title}
            </Typography>
            <div className={classes.actions}>
              {isUpdating ? (
                <Button
                  size="m"
                  variant="ghost"
                  startIcon={<Icon.CloseLine />}
                  onClick={isUpdatingActions.setFalse}
                >
                  {contentMap.cancel}
                </Button>
              ) : (
                <>
                  <Button
                    size="m"
                    variant="ghost"
                    startIcon={<Icon.BinLine />}
                    onClick={isDeleteModalOpenActions.setTrue}
                  >
                    {contentMap.delete}
                  </Button>
                  <Button
                    size="m"
                    variant="ghost"
                    startIcon={<Icon.EditLine />}
                    onClick={isUpdatingActions.setTrue}
                  >
                    {contentMap.update}
                  </Button>
                </>
              )}
            </div>
          </div>
          {isUpdating ? (
            <UpdateForm
              exitUpdatingMode={isUpdatingActions.setFalse}
              user={user}
            />
          ) : (
            <UserPreview user={user} />
          )}
        </div>
      </div>
      <DeleteUserModal
        isOpen={isDeleteModalOpen}
        handleClose={isDeleteModalOpenActions.setFalse}
        user={user}
      />
    </>
  );
};

export default ProfilePage;
