'use client';

import { ComponentProps, FC, ReactNode } from 'react';

import { Modal } from '@project-management-app/components';
import { useAppContext } from '@project-management-app/hooks';

import { createEntityModalDictionary } from './create-entity-modal.dictionary';
import { ActionModal } from '../modals';

type Props = Omit<
  ComponentProps<typeof ActionModal>,
  'actionName' | 'children' | 'handleAction'
> & {
  children: ReactNode;
  handleCreate: ComponentProps<typeof ActionModal>['handleAction'];
};

const CreateEntityModal: FC<Props> = ({
  children,
  handleCreate,
  ...modalProps
}) => {
  const { locale } = useAppContext();
  const contentMap = createEntityModalDictionary.getContentMap({
    locale,
  });

  return (
    <ActionModal
      actionName={contentMap.create}
      handleAction={handleCreate}
      {...modalProps}
    >
      <Modal.Fieldset>{children}</Modal.Fieldset>
    </ActionModal>
  );
};

export { CreateEntityModal };
