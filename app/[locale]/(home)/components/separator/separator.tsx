import { FC } from 'react';

import classes from './separator.module.scss';

const Separator: FC = () => {
  return (
    <div className={classes.container}>
      <hr className={classes.separator} />
    </div>
  );
};

export { Separator };
