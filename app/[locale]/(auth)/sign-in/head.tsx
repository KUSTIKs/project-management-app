import { FC } from 'react';

import { AppLocale } from '@project-management-app/types';

import { authDictionary } from '../auth.dictionary';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const SignInHead: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = authDictionary.getContentMap({ locale });

  const title = `Magic | ${contentMap.signIn}`;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
    </>
  );
};

export default SignInHead;
