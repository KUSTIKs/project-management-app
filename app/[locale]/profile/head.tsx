import { FC } from 'react';

import { AppLocale } from '@project-management-app/types';

import { profileDictionary } from './profile.dictionary';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const ProfileHead: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = profileDictionary.getContentMap({ locale });

  const title = `Magic | ${contentMap.title}`;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
    </>
  );
};

export default ProfileHead;
