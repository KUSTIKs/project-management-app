'use client';

import { ComponentProps, FC, ReactNode } from 'react';

import { Button, Modal, Typography } from '@project-management-app/components';
import { isString } from '@project-management-app/helpers';
import { useAppContext } from '@project-management-app/hooks';

import { actionModalDictionary } from './action-modal.dictionary';
import classes from './action-modal.module.scss';

type Props = Pick<ComponentProps<typeof Modal>, 'handleClose' | 'isOpen'> & {
  entityName?: string;
  actionName: string;
  children: ReactNode;
  isLoading?: boolean;
  isActionDisabled?: boolean;
  errorMessage?: unknown;
  handleAction: () => void;
  withQuotes?: boolean;
  title?: string;
};

const ActionModal: FC<Props> = ({
  actionName,
  children,
  entityName,
  handleClose,
  isLoading,
  isActionDisabled,
  errorMessage,
  handleAction,
  isOpen,
  withQuotes,
  title,
}) => {
  const { locale } = useAppContext();
  const contentMap = actionModalDictionary.getContentMap({ locale });
  const formattedEntityName = withQuotes ? `'${entityName}'` : entityName;
  const titleWithEntity = `${actionName} ${formattedEntityName ?? ''}`;

  return (
    <Modal
      title={title || titleWithEntity}
      isDisabled={isLoading}
      onSubmit={handleAction}
      handleClose={handleClose}
      isOpen={isOpen}
    >
      <div className={classes.wrapper}>
        {children}
        {isString(errorMessage) && (
          <Typography variant="text" weight={600} colorName="red/200">
            {errorMessage}
          </Typography>
        )}
      </div>
      <Modal.ButtonGroup>
        <Button size="l" variant="ghost" onClick={handleClose}>
          {contentMap.cancel}
        </Button>
        <Button
          size="l"
          type="submit"
          onClick={handleAction}
          isLoading={isLoading}
          isDisabled={isActionDisabled}
        >
          {actionName}
        </Button>
      </Modal.ButtonGroup>
    </Modal>
  );
};

export { ActionModal };
