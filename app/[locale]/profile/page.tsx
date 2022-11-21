import { FC } from 'react';

import {
  Button,
  TextInput,
  Typography,
} from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from './profile.module.scss';
import { profileDictionary } from './profile.dictionary';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const ProfilePage: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = profileDictionary.getContentMap({ locale });

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <Typography variant="title1" weight={700}>
          {contentMap.title}
        </Typography>
        <div className={classes.inputs}>
          <TextInput
            label={contentMap.name}
            variant="unfilled"
            defaultValue="random user"
          />
          <TextInput
            label={contentMap.login}
            variant="unfilled"
            defaultValue="random login"
          />
        </div>
        <Button size="l" isDisabled>
          {contentMap.update}
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
