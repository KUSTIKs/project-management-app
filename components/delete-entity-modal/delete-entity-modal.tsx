import { ComponentProps, FC } from 'react';

import { Button, Modal, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';
import { isString } from '@project-management-app/helpers';

import { getDeleteEntityModalDictionary } from './delete-entity-modal.dictionary';

type Props = Omit<ComponentProps<typeof Modal>, 'title' | 'children'> & {
  entityName: string;
  handleDelete: () => void;
  locale: AppLocale;
  errorMessage?: unknown;
  isLoading?: boolean;
};

const DeleteEntityModal: FC<Props> = ({
  entityName,
  handleDelete,
  locale,
  isLoading,
  errorMessage,
  ...modalProps
}) => {
  const contentMap = getDeleteEntityModalDictionary({
    entityName,
  }).getContentMap({
    locale,
  });

  return (
    <Modal title={contentMap.title} isLoading={isLoading} {...modalProps}>
      <Modal.Fieldset>
        <Typography variant="headline" weight={600} colorName="text/700">
          {contentMap.message}
        </Typography>
        {isString(errorMessage) && (
          <Typography variant="text" weight={600} colorName="red/200">
            {errorMessage}
          </Typography>
        )}
      </Modal.Fieldset>
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
