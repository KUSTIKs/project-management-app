import { FC } from 'react';

import { AppLocale } from '@project-management-app/types';

import { boardDictionary } from './board.dictionary';

type Props = {
  params: {
    locale: AppLocale;
  };
};

const BoardHead: FC<Props> = ({ params }) => {
  const { locale } = params;
  const contentMap = boardDictionary.getContentMap({ locale });

  const title = `Magic | ${contentMap.boardDetails}`;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
    </>
  );
};

export default BoardHead;
