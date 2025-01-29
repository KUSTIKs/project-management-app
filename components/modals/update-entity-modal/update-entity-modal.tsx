'use client';

import { ComponentProps, FC, ReactNode } from 'react';

import { Modal } from '@project-management-app/components';
import { useAppContext } from '@project-management-app/hooks';

import { ActionModal } from '../modals';
import { modalsDictionary } from '../modals.dictionary';

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
  const { locale } = useAppContext();
  const contentMap = modalsDictionary.getContentMap({
    locale,
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
