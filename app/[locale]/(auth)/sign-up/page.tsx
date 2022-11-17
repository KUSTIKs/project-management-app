import { FC } from 'react';

import {
  AppLink,
  Button,
  TextInput,
  Typography,
} from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import { authDictionary } from '../auth.dictionary';
import classes from '../auth.module.scss';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const SignUpPage: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = authDictionary.getContentMap(locale);

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <Typography variant="title1" weight={800}>
          {contentMap.signUp}
        </Typography>
        <div className={classes.inputs}>
          <TextInput label={contentMap.username} />
          <TextInput label={contentMap.login} />
          <TextInput label={contentMap.password} />
        </div>
        <Button size="l">{contentMap.submit}</Button>
      </form>
      <Typography variant="text" weight={500}>
        {contentMap.signUpMessage}{' '}
        <AppLink href="/log-in">
          <Typography
            variant="text"
            weight={600}
            colorName="blue/500"
            as="span"
          >
            {contentMap.logIn}
          </Typography>
        </AppLink>
      </Typography>
    </div>
  );
};

export default SignUpPage;
