'use client';

import { FC } from 'react';

import { AppLocale } from '@project-management-app/types';
import { Button, Icon, Typography } from '@project-management-app/components';
import { KanbanBoard } from '@project-management-app/widgets';

import classes from './board.module.scss';

type Props = {
  params: {
    locale: AppLocale;
    id: string;
  };
};

const BoardPage: FC<Props> = ({ params }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.topInfo}>
          <Typography variant="title1">Hello, world</Typography>
          <div className={classes.group}>
            <Button size="m" variant="ghost" startIcon={<Icon.EditLine />}>
              Edit
            </Button>
            <Button size="m" startIcon={<Icon.AddLine />}>
              New Column
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.columnsWrapperContainer}>
        <KanbanBoard />
      </div>
    </>
  );
};

export default BoardPage;
