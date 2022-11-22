import { FC } from 'react';

import { Typography } from '@project-management-app/components';

import classes from './task-card.module.scss';

type Props = {
  title: string;
  description: string;
};

const TaskCard: FC<Props> = ({ title, description }) => {
  return (
    <div className={classes.wrapper}>
      <Typography variant="headline" colorName="text/300" weight={600}>
        {title}
      </Typography>
      <Typography variant="text" colorName="text/600" weight={500}>
        {description}
      </Typography>
    </div>
  );
};

export { TaskCard };
