'use client';

import { ComponentProps, FC, ReactNode } from 'react';

import { Button, Modal, Typography } from '@project-management-app/components';
import { getValidChild } from '@project-management-app/helpers';
import { useAppContext } from '@project-management-app/hooks';

import classes from './action-modal.module.scss';
import { modalsDictionary } from '../modals.dictionary';

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
  isError?: boolean;
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
  isError,
}) => {
  const { locale } = useAppContext();
  const contentMap = modalsDictionary.getContentMap({ locale });
  const formattedEntityName = withQuotes ? `'${entityName}'` : entityName;
  const titleWithEntity = `${actionName} ${formattedEntityName ?? ''}`;

  return (
    <Modal
      title={title || titleWithEntity}
      isDisabled={isLoading}
      handleClose={handleClose}
      isOpen={isOpen}
    >
      <form onSubmit={handleAction} style={{ display: 'contents' }}>
        <div className={classes.wrapper}>
          <>
            {children}
            {(errorMessage || isError) && (
              <Typography variant="text" weight={600} colorName="red/200">
                {getValidChild(errorMessage, contentMap.somethingWentWrong)}
              </Typography>
            )}
          </>
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
      </form>
    </Modal>
  );
};

export { ActionModal };
