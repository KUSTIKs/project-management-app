import { ComponentProps, FC } from 'react';

import { Button, Modal, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import { getDeleteEntityModalDictionary } from './delete-entity-modal.dictionary';

type Props = Omit<ComponentProps<typeof Modal>, 'title' | 'children'> & {
  entityName: string;
  handleDelete: () => void;
  locale: AppLocale;
  isLoading?: boolean;
};

const DeleteEntityModal: FC<Props> = ({
  entityName,
  handleDelete,
  locale,
  isLoading,
  ...modalProps
}) => {
  const contentMap = getDeleteEntityModalDictionary({
    entityName,
  }).getContentMap({
    locale,
  });

  return (
    <Modal title={contentMap.title} {...modalProps}>
      <Typography variant="headline" weight={600} colorName="text/600">
        {contentMap.message}
      </Typography>
      <Modal.ButtonGroup>
        <Button size="l" variant="ghost" onClick={modalProps.handleClose}>
          {contentMap.cancel}
        </Button>
        <Button size="l" onClick={handleDelete} isLoading={isLoading}>
          {contentMap.delete}
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  );
};

export { DeleteEntityModal };
