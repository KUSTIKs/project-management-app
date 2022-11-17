import { FC } from 'react';

import {
  Button,
  TextInput,
  Typography,
} from '@project-management-app/components';

import classes from './profile.module.scss';

const ProfilePage: FC = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <Typography variant="title1" weight={700}>
          Profile
        </Typography>
        <div className={classes.inputs}>
          <TextInput
            label="username"
            variant="unfilled"
            defaultValue="random user"
          />
          <TextInput
            label="login"
            variant="unfilled"
            defaultValue="random login"
          />
        </div>
        <Button size="l" disabled>
          Update
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
