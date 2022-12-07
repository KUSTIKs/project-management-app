import { FC } from 'react';

import { User } from '@project-management-app/types';
import { useAppContext } from '@project-management-app/hooks';
import { TextPreview } from '@project-management-app/components';

import { profileDictionary } from '../../profile.dictionary';
import classes from '../../profile.module.scss';

type Props = {
  user: User;
};

const UserPreview: FC<Props> = ({ user }) => {
  const { locale } = useAppContext();
  const contentMap = profileDictionary.getContentMap({ locale });

  return (
    <>
      <fieldset className={classes.fieldset} disabled>
        <TextPreview label={contentMap.name}>{user.name}</TextPreview>
        <TextPreview label={contentMap.login}>{user.login}</TextPreview>
      </fieldset>
    </>
  );
};

export { UserPreview };
