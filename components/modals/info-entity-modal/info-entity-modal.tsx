'use client';

import { ComponentProps, FC, ReactNode, useEffect, useState } from 'react';

import { Button, Icon, Modal } from '@project-management-app/components';
import { useAppContext } from '@project-management-app/hooks';

import { modalsDictionary } from '../modals.dictionary';

type Props = Omit<ComponentProps<typeof Modal>, 'onSubmit' | 'isDisabled'> & {
  handleDeleteClick: () => void;
  handleUpdateClick: () => void;
  handleClose: () => void;
  children: ReactNode;
  copyHref?: string;
};

const InfoEntityModal: FC<Props> = ({
  handleDeleteClick,
  handleUpdateClick,
  copyHref,
  children,
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
    <Modal {...modalProps}>
      <Modal.Actions>
        <Button
          size="s"
          variant="ghost"
          startIcon={<Icon.EditLine />}
          onClick={() => {
            handleUpdateClick();
            modalProps.handleClose();
          }}
        >
          {contentMap.update}
        </Button>
        <Button
          size="s"
          variant="ghost"
          startIcon={<Icon.BinLine />}
          onClick={() => {
            handleDeleteClick();
            modalProps.handleClose();
          }}
        >
          {contentMap.delete}
        </Button>
        {copyHref &&
          (copyState === 'error' ? (
            <Button size="s" variant="ghost" startIcon={<Icon.CloseLine />}>
              {contentMap.notCopied}
            </Button>
          ) : copyState === 'success' ? (
            <Button size="s" variant="ghost" startIcon={<Icon.CheckLine />}>
              {contentMap.copied}
            </Button>
          ) : (
            <Button
              size="s"
              variant="ghost"
              startIcon={<Icon.LinkLine />}
              onClick={handleCopyClick}
            >
              {contentMap.copyLink}
            </Button>
          ))}
      </Modal.Actions>
      <Modal.Fieldset>{children}</Modal.Fieldset>
    </Modal>
  );
};

export { InfoEntityModal };
