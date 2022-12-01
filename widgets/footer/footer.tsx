import { FC } from 'react';

import { Button, Icon, Typography } from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from './footer.module.scss';
import { footerDictionary } from './footer.dictionary';

type Props = {
  locale: AppLocale;
};

const Footer: FC<Props> = ({ locale }) => {
  const contentMap = footerDictionary.getContentMap({ locale });

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.group}>
          <Button
            variant="text"
            size="s"
            symmetricPadding
            href="https://rs.school"
          >
            <Icon.RsSchoolLogo height="2em" width="auto" />
          </Button>
          <Button
            variant="text"
            size="s"
            startIcon={<Icon.GithubFill />}
            href="https://github.com/KUSTIKs"
          >
            KUSTIKs
          </Button>
        </div>
        <Typography
          variant="subhead"
          weight={500}
          colorName="text/700"
          as="small"
        >
          ©2022 {contentMap.copyText}
        </Typography>
      </div>
    </footer>
  );
};

export { Footer };
