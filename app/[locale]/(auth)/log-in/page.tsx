import { FC } from 'react';

import {
  AppLink,
  Button,
  TextInput,
  Typography,
} from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from '../auth.module.scss';
import { authDictionary } from '../auth.dictionary';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const LogInPage: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = authDictionary.getContentMap(locale);

  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <Typography variant="title1" weight={800}>
          {contentMap.logIn}
        </Typography>
        <div className={classes.inputs}>
          <TextInput label={contentMap.login} />
          <TextInput label={contentMap.password} />
        </div>
        <Button size="l">{contentMap.submit}</Button>
      </form>
      <Typography variant="text" weight={500}>
        {contentMap.logInMessage}{' '}
        <AppLink href="/sign-up">
          <Typography
            variant="text"
            weight={600}
            colorName="blue/500"
            as="span"
          >
            {contentMap.signUp}
          </Typography>
        </AppLink>
      </Typography>
    </div>
  );
};

export default LogInPage;
