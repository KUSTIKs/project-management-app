'use client';

import { useQuery } from 'react-query';
import { FC, useState } from 'react';

import {
  Typography,
  Button,
  Icon,
  BoardCard,
  Loader,
} from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';
import { boardsService } from '@project-management-app/services';
import { QueryKey } from '@project-management-app/enums';

import { boardsDictionary } from './boards.dictionary';
import classes from './boards.module.scss';
import { CreateBoardModal } from './components/components';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const BoardsPage: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = boardsDictionary.getContentMap({ locale });
  const {
    data: boards,
    error,
    isLoading,
  } = useQuery({
    queryFn: boardsService.getAll,
    queryKey: [QueryKey.BOARDS],
  });
  const errorMessage = getKeyFromUnknown(error, 'message');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.topInfo}>
          <Typography variant="title1">{contentMap.title}</Typography>
          <div className={classes.group}>
            <Button
              size="m"
              variant="contained"
              startIcon={<Icon.AddLine />}
              onClick={openCreateModal}
            >
              {contentMap.newBoard}
            </Button>
          </div>
        </div>
        {boards &&
          (boards.length > 0 ? (
            <ul className={classes.boardsWrapper}>
              {boards.map(({ id, title, description }) => (
                <BoardCard key={id} title={title} description={description} />
              ))}
            </ul>
          ) : (
            <Typography
              variant="largeHeadline"
              weight={600}
              colorName="text/700"
            >
              {contentMap.noBoardsMessage}
            </Typography>
          ))}
        {isString(errorMessage) && (
          <Typography variant="largeHeadline" weight={600} colorName="text/700">
            {errorMessage}
          </Typography>
        )}
        {isLoading && (
          <div className={classes.loadingContainer}>
            <Loader size={24} />
          </div>
        )}
      </div>
      <CreateBoardModal
        locale={locale}
        handleClose={closeCreateModal}
        isOpen={isCreateModalOpen}
      />
    </>
  );
};

export default BoardsPage;
