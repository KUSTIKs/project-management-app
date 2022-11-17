import { FC } from 'react';
import Image from 'next/image';

import {
  AppLink,
  Button,
  Icon,
  Typography,
} from '@project-management-app/components';

import classes from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.group}>
          <AppLink href="https://rs.school/">
            <Image
              src="/rs-school-logo.png"
              alt="RsSchool"
              height={30}
              width={59}
              className={classes.rsSchoolLogo}
            />
          </AppLink>
          <AppLink href="https://github.com/KUSTIKs">
            <Button variant="text" size="s" startIcon={<Icon.GithubFill />}>
              Kustiks
            </Button>
          </AppLink>
        </div>
        <Typography
          variant="subhead"
          weight={500}
          colorName="text/700"
          as="small"
        >
          ©2022 all rights reserved
        </Typography>
      </div>
    </footer>
  );
};

export { Footer };
