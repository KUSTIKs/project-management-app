import { FC } from 'react';

import { Typography, Button, Icon } from '@project-management-app/components';

import classes from './boards.module.scss';

const BoardsPage: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topInfo}>
        <Typography variant="title1">Boards</Typography>
        <div className={classes.group}>
          <Button size="m" variant="contained" startIcon={<Icon.AddLine />}>
            New Board
          </Button>
        </div>
      </div>
      <ul className={classes.boardsWrapper}>
        <div className={classes.placeholderCard} />
        <div className={classes.placeholderCard} />
        <div className={classes.placeholderCard} />
        <div className={classes.placeholderCard} />
        <div className={classes.placeholderCard} />
      </ul>
    </div>
  );
};

export default BoardsPage;
