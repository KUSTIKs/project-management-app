import { FC } from 'react';
import Link from 'next/link';

import {
  Button,
  TextInput,
  Typography,
} from '@project-management-app/components';

import classes from '../auth.module.scss';

const SignUpPage: FC = () => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <Typography variant="title1" weight={800}>
          Sign up
        </Typography>
        <div className={classes.inputs}>
          <TextInput label="username" />
          <TextInput label="login" />
          <TextInput label="password" />
        </div>
        <Button size="l">Submit</Button>
      </form>
      <Typography variant="text" weight={500}>
        Have an account ?{' '}
        <Link href="/log-in">
          <Typography
            variant="text"
            weight={600}
            colorName="blue/500"
            as="span"
          >
            Log in
          </Typography>
        </Link>
      </Typography>
    </div>
  );
};

export default SignUpPage;
