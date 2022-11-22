import { FC, ReactNode } from 'react';

import { Button, Icon, Typography } from '@project-management-app/components';

import classes from './column.module.scss';

type Props = {
  title: string;
  children: ReactNode;
};

const Column: FC<Props> = ({ title, children }) => {
  return (
    <article className={classes.column}>
      <header className={classes.header}>
        <Typography
          variant="largeHeadline"
          weight={600}
          colorName="text/300"
          className={classes.title}
        >
          {title}
        </Typography>
        <Button symmetricPadding size="s" variant="text">
          <Icon.InformationLine size={18} />
        </Button>
      </header>
      <main className={classes.tasksWrapper}>{children}</main>
      <footer className={classes.footer}>
        <Button variant="text" startIcon={<Icon.AddLine />}>
          New Task
        </Button>
      </footer>
    </article>
  );
};

export { Column };
