import { FC } from 'react';

import {
  AppLink,
  Button,
  TextInput,
  Typography,
} from '@project-management-app/components';

import classes from '../auth.module.scss';

const LogInPage: FC = () => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <Typography variant="title1" weight={800}>
          Log in
        </Typography>
        <div className={classes.inputs}>
          <TextInput label="login" />
          <TextInput label="password" />
        </div>
        <Button size="l">Submit</Button>
      </form>
      <Typography variant="text" weight={500}>
        Don`t have an account ?{' '}
        <AppLink href="/sign-up">
          <Typography
            variant="text"
            weight={600}
            colorName="blue/500"
            as="span"
          >
            Sign up
          </Typography>
        </AppLink>
      </Typography>
    </div>
  );
};

export default LogInPage;
