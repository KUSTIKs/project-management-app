import { FC } from 'react';

import { Button, Icon, Typography } from '@project-management-app/components';

import classes from './board-card.module.scss';

type Props = {
  title: string;
  description: string;
};

const BoardCard: FC<Props> = ({ description, title }) => {
  return (
    <article className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.avatar}>{title[0]}</div>
        <div className={classes.actions}>
          <Button size="m" variant="text" symmetricPadding>
            <Icon.EditLine size={18} />
          </Button>
          <Button size="m" variant="text" symmetricPadding>
            <Icon.BinLine size={18} />
          </Button>
        </div>
      </header>
      <div>
        <Typography variant="headline" weight={600} as="h2">
          {title}
        </Typography>
        <Typography
          variant="text"
          weight={500}
          colorName="text/800"
          className={classes.description}
        >
          {description}
        </Typography>
      </div>
    </article>
  );
};

export { BoardCard };
