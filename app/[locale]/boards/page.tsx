'use client';

import { useQuery } from 'react-query';
import { FC, useState } from 'react';

import {
  Typography,
  Button,
  Icon,
  Loader,
} from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';
import { boardsService } from '@project-management-app/services';
import { QueryKey } from '@project-management-app/enums';

import { boardsDictionary } from './boards.dictionary';
import { BoardCard, CreateBoardModal } from './components/components';
import classes from './boards.module.scss';

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
              {boards.map((board) => (
                <BoardCard key={board.id} board={board} />
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
        handleClose={closeCreateModal}
        isOpen={isCreateModalOpen}
      />
    </>
  );
};

export default BoardsPage;
