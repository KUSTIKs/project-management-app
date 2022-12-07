'use client';

import { useQuery } from 'react-query';
import { FC } from 'react';

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
import { CreateBoardModal } from '@project-management-app/widgets';
import { useBooleanState } from '@project-management-app/hooks';

import { boardsDictionary } from './boards.dictionary';
import { BoardCard } from './components/components';
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
  const [isCreateModalOpen, isCreateModalOpenActions] = useBooleanState(false);

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
              onClick={isCreateModalOpenActions.setTrue}
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
        handleClose={isCreateModalOpenActions.setFalse}
        isOpen={isCreateModalOpen}
      />
    </>
  );
};

export default BoardsPage;
