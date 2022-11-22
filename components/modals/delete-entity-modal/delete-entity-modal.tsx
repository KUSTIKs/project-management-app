import { ComponentProps, FC } from 'react';

import { Typography } from '@project-management-app/components';

import { getDeleteEntityModalDictionary } from './delete-entity-modal.dictionary';
import { ActionModal } from '../modals';

type Props = Omit<
  ComponentProps<typeof ActionModal>,
  'actionName' | 'children' | 'handleAction'
> & {
  entityName: string;
  handleDelete: ComponentProps<typeof ActionModal>['handleAction'];
};

const DeleteEntityModal: FC<Props> = ({ handleDelete, ...modalProps }) => {
  const { withQuotes, entityName } = modalProps;
  const formattedEntityName = withQuotes ? `'${entityName}'` : entityName;
  const contentMap = getDeleteEntityModalDictionary({
    entityName: formattedEntityName,
  }).getContentMap({
    locale: modalProps.locale,
  });

  return (
    <ActionModal
      actionName={contentMap.delete}
      handleAction={handleDelete}
      {...modalProps}
    >
      <Typography variant="headline" weight={600} colorName="text/700">
        {contentMap.message}
      </Typography>
    </ActionModal>
  );
};

export { DeleteEntityModal };
