/* eslint-disable react/jsx-key */
import { Icon } from '@project-management-app/components';

import { SearchItemType } from 'widgets/search-modal/enums/enums';

const iconToItemTypeMap = new Map([
  [SearchItemType.TASK, <Icon.StickyNoteFill />],
  [SearchItemType.BOARD, <Icon.ArtboardFill />],
]);

export { iconToItemTypeMap };
