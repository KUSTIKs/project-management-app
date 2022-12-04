import { ElementType } from 'react';

import { TypographyVariant } from '../../types/types';

const getDefaultComponent = (variant: TypographyVariant): ElementType => {
  switch (variant) {
    case 'largeTitle1':
    case 'title1':
      return 'h1';
    case 'largeTitle2':
    case 'title2':
      return 'h2';
    case 'largeTitle3':
      return 'h3';
    case 'largeHeadline':
    case 'headline':
    case 'subhead':
      return 'b';
    case 'text':
    default:
      return 'p';
  }
};

export { getDefaultComponent };
