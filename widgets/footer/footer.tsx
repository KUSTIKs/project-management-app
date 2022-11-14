import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Button, Icon, Typography } from '@project-management-app/components';

import classes from './footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.group}>
          <Link href="https://rs.school/">
            <Image
              src="/rs-school-logo.png"
              alt="RsSchool"
              height={30}
              width={59}
              className={classes.rsSchoolLogo}
            />
          </Link>
          <Link href="https://github.com/KUSTIKs">
            <Button variant="text" size="s" startIcon={<Icon.GithubFill />}>
              Kustiks
            </Button>
          </Link>
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
