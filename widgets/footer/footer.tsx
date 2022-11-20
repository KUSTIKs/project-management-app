import { FC } from 'react';
import Image from 'next/image';

import {
  AppLink,
  Button,
  Icon,
  Typography,
} from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from './footer.module.scss';
import { footerDictionary } from './footer.dictionary';

type Props = {
  locale: AppLocale;
};

const Footer: FC<Props> = ({ locale }) => {
  const contentMap = footerDictionary.getContentMap(locale);

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.group}>
          <AppLink href="https://rs.school/">
            <Image
              src="/images/rs-school-logo.png"
              alt="RsSchool"
              height={30}
              width={59}
              className={classes.rsSchoolLogo}
            />
          </AppLink>
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
