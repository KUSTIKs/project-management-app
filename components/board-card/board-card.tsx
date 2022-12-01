import { FC } from 'react';

import {
  AppLink,
  Button,
  Icon,
  Typography,
} from '@project-management-app/components';

import classes from './board-card.module.scss';

type Props = {
  title: string;
  description: string;
  handleDelete?: () => void;
  handleUpdate?: () => void;
  boardId: string;
};

const BoardCard: FC<Props> = ({
  description,
  title,
  handleDelete,
  handleUpdate,
  boardId,
}) => {
  const boardHref = `/boards/${boardId}`;

  return (
    <article className={classes.wrapper}>
      <AppLink
        href={boardHref}
        className={classes.link}
        aria-label="Go to board page"
      />
      <header className={classes.header}>
        <div className={classes.avatar}>{title[0]}</div>
        <div className={classes.actions}>
          <Button
            size="m"
            variant="text"
            symmetricPadding
            onClick={handleUpdate}
          >
            <Icon.EditLine size={18} />
          </Button>
          <Button
            size="m"
            variant="text"
            symmetricPadding
            onClick={handleDelete}
          >
            <Icon.BinLine size={18} />
          </Button>
        </div>
      </header>
      <div className={classes.info}>
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
