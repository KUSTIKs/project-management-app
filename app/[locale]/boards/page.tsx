import { FC } from 'react';

import {
  Typography,
  Button,
  Icon,
  BoardCard,
} from '@project-management-app/components';
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
        <BoardCard
          title="Mamie Gregory"
          description="Pariatur ullamco ut adipisicing esse veniam ullamco incididunt commodo."
        />
        <BoardCard
          title="Stephen Robinson"
          description="Tempor incididunt ex ut dolore anim qui quis eiusmod ullamco ipsum Lorem eiusmod id pariatur."
        />
        <BoardCard
          title="Ray Sanders"
          description="Veniam aliquip laborum amet consectetur et et laboris consectetur laborum nisi."
        />
        <BoardCard
          title="Angel Bradley"
          description="Cillum officia velit anim Lorem nisi dolore ipsum."
        />
        <BoardCard
          title="Winnie Powell"
          description="Duis eiusmod ex id amet cupidatat excepteur."
        />
        <BoardCard
          title="Callie Sparks"
          description="Tempor anim laborum dolor consequat excepteur exercitation."
        />
        <BoardCard
          title="Anne Lopez"
          description="Velit mollit eiusmod ullamco occaecat aliquip."
        />
      </ul>
    </div>
  );
};

export default BoardsPage;
