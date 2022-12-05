'use client';

import { FC } from 'react';
import { useQuery } from 'react-query';
import { filesize } from 'filesize';

import { Button, Icon, Typography } from '@project-management-app/components';
import { filesService } from '@project-management-app/services';

import classes from './file-card.module.scss';

type Props = {
  handleDelete?: () => void;
  fileName: string;
  fileSize: number;
  taskId: string;
};

const FileCard: FC<Props> = ({ fileName, fileSize, handleDelete, taskId }) => {
  const { data: file } = useQuery({
    queryFn: () =>
      filesService.getByName({
        filename: fileName,
        taskId,
      }),
    queryKey: ['files', fileName],
  });

  const readableFileSize = filesize(fileSize).toString();

  return (
    <div className={classes.wrapper}>
      <div className={classes.backdrop}>
        <Button
          size="s"
          variant="ghost"
          symmetricPadding
          download={fileName}
          href={file && URL.createObjectURL(file)}
        >
          <Icon.DownloadLine size={18} />
        </Button>
        {handleDelete && (
          <Button
            size="s"
            variant="ghost"
            symmetricPadding
            onClick={handleDelete}
          >
            <Icon.BinLine size={18} />
          </Button>
        )}
      </div>
      <div className={classes.card}>
        <Icon.FileFill size={20} />
        <div>
          <Typography
            variant="text"
            weight={600}
            as="p"
            className={classes.name}
          >
            {fileName}
          </Typography>
          <Typography variant="subhead" weight={500} className={classes.size}>
            {readableFileSize}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export { FileCard };
