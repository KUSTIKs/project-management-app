import { ComponentProps, FC, ReactNode } from 'react';

import { Modal } from '@project-management-app/components';

import { updateEntityModalDictionary } from './update-entity-modal.dictionary';
import { ActionModal } from '../modals';

type Props = Omit<
  ComponentProps<typeof ActionModal>,
  'actionName' | 'children' | 'handleAction'
> & {
  children: ReactNode;
  handleUpdate: ComponentProps<typeof ActionModal>['handleAction'];
};

const UpdateEntityModal: FC<Props> = ({
  children,
  handleUpdate,
  ...modalProps
}) => {
  const contentMap = updateEntityModalDictionary.getContentMap({
    locale: modalProps.locale,
  });

  return (
    <ActionModal
      actionName={contentMap.update}
      handleAction={handleUpdate}
      {...modalProps}
    >
      <Modal.Fieldset>{children}</Modal.Fieldset>
    </ActionModal>
  );
};

export { UpdateEntityModal };
