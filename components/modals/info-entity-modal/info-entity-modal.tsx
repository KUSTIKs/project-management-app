'use client';

import { ComponentProps, FC, ReactNode, useEffect, useState } from 'react';

import {
  Button,
  Icon,
  Modal,
  Typography,
} from '@project-management-app/components';
import { useAppContext } from '@project-management-app/hooks';
import { getValidChild } from '@project-management-app/helpers';

import { modalsDictionary } from '../modals.dictionary';
import classes from './info-entity-modal.module.scss';

type Props = Omit<ComponentProps<typeof Modal>, 'onSubmit' | 'isDisabled'> & {
  handleDeleteClick?: () => void;
  handleClose: () => void;
  children: ReactNode;
  copyHref?: string;
  errorMessage?: unknown;
  isError?: boolean;
  additionalActions?: ReactNode;
};

const InfoEntityModal: FC<Props> = ({
  handleDeleteClick,
  copyHref,
  children,
  isError,
  errorMessage,
  additionalActions,
  ...modalProps
}) => {
  const { locale } = useAppContext();
  const contentMap = modalsDictionary.getContentMap({ locale });
  const [copyState, setCopyState] = useState<'error' | 'success'>();

  const handleCopyClick = async () => {
    if (!copyHref) return;

    try {
      await navigator.clipboard.writeText(copyHref);
      setCopyState('success');
    } catch {
      setCopyState('error');
    }
  };

  useEffect(() => {
    if (!copyState) return;

    const timeoutId = setTimeout(() => {
      setCopyState(undefined);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [copyState]);

  return (
    <Modal {...modalProps} size={modalProps.size ?? 'l'}>
      <Modal.Actions>
        {additionalActions}
        {handleDeleteClick && (
          <Button
            variant="ghost"
            startIcon={<Icon.BinLine />}
            onClick={handleDeleteClick}
          >
            {contentMap.delete}
          </Button>
        )}
        {copyHref &&
          (copyState === 'error' ? (
            <Button variant="ghost" startIcon={<Icon.CloseLine />}>
              {contentMap.notCopied}
            </Button>
          ) : copyState === 'success' ? (
            <Button variant="ghost" startIcon={<Icon.CheckLine />}>
              {contentMap.copied}
            </Button>
          ) : (
            <Button
              variant="ghost"
              startIcon={<Icon.LinkLine />}
              onClick={handleCopyClick}
            >
              {contentMap.copyLink}
            </Button>
          ))}
      </Modal.Actions>
      <div className={classes.wrapper}>
        {children}
        {(errorMessage || isError) && (
          <Typography variant="text" weight={600} colorName="red/200">
            {getValidChild(errorMessage, contentMap.somethingWentWrong)}
          </Typography>
        )}
      </div>
    </Modal>
  );
};

export { InfoEntityModal };
