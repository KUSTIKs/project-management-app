'use client';

import { FC, useState } from 'react';
import { useQuery } from 'react-query';

import { AppLocale } from '@project-management-app/types';
import {
  Button,
  Icon,
  Loader,
  Typography,
} from '@project-management-app/components';
import {
  CreateColumnModal,
  KanbanBoard,
} from '@project-management-app/widgets';
import { boardsService } from '@project-management-app/services';
import { getKeyFromUnknown, isString } from '@project-management-app/helpers';

import classes from './board.module.scss';
import { boardDictionary } from './board.dictionary';

type Props = {
  params: {
    locale: AppLocale;
    id: string;
  };
};

const BoardPage: FC<Props> = ({ params }) => {
  const { id, locale } = params;
  const contentMap = boardDictionary.getContentMap({ locale });
  const {
    data: board,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => boardsService.getById(id),
  });
  const errorMessage = getKeyFromUnknown(error, 'message');
  const [isCreateColumnModalOpen, setIsCreateColumnModalOpen] = useState(false);

  const openCreateColumnModal = () => {
    setIsCreateColumnModalOpen(true);
  };
  const closeCreateColumnModal = () => {
    setIsCreateColumnModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className={classes.container}>
        <div className={classes.loadingContainer}>
          <Loader size={24} />
        </div>
      </div>
    );
  }

  if (!board || error) {
    return (
      <div className={classes.container}>
        <Typography variant="largeHeadline" weight={600} colorName="text/700">
          {isString(errorMessage) ? errorMessage : contentMap.noBoardFound}
        </Typography>
      </div>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.topInfo}>
          <Typography variant="title1">{board.title}</Typography>
          <div className={classes.group}>
            <Button size="m" variant="ghost" startIcon={<Icon.EditLine />}>
              {contentMap.edit}
            </Button>
            <Button
              size="m"
              startIcon={<Icon.AddLine />}
              onClick={openCreateColumnModal}
            >
              {contentMap.newColumn}
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.columnsWrapperContainer}>
        <KanbanBoard boardId={board.id} />
      </div>
      <CreateColumnModal
        boardId={board.id}
        handleClose={closeCreateColumnModal}
        isOpen={isCreateColumnModalOpen}
      />
    </>
  );
};

export default BoardPage;
