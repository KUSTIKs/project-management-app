import { FC } from 'react';

import { Typography, Button, Icon } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from './boards.module.scss';
import { boardsDictionary } from './boards.dictionary';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const BoardsPage: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = boardsDictionary.getContentMap(locale);

  return (
    <div className={classes.container}>
      <div className={classes.topInfo}>
        <Typography variant="title1">{contentMap.title}</Typography>
        <div className={classes.group}>
          <Button size="m" variant="contained" startIcon={<Icon.AddLine />}>
            {contentMap.newBoard}
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
