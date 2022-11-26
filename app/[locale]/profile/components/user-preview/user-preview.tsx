import { FC } from 'react';

import { User } from '@project-management-app/types';
import { useAppContext } from '@project-management-app/hooks';
import { TextInput } from '@project-management-app/components';

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
        <TextInput
          label={contentMap.name}
          value={user.name}
          variant="unfilled"
          readOnly
        />
        <TextInput
          label={contentMap.login}
          value={user.login}
          variant="unfilled"
          readOnly
        />
      </fieldset>
    </>
  );
};

export { UserPreview };
