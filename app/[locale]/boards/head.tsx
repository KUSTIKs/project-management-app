import { FC } from 'react';

import { AppLocale } from '@project-management-app/types';

import { boardsDictionary } from './boards.dictionary';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const BoardsHead: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = boardsDictionary.getContentMap({ locale });

  const title = `Magic | ${contentMap.title}`;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
    </>
  );
};

export default BoardsHead;
