import { FC } from 'react';
import Image from 'next/image';

import {
  AppLink,
  Button,
  Icon,
  Typography,
} from '@project-management-app/components';

import classes from './hero.module.scss';

const Hero: FC = () => {
  return (
    <section className={classes.container}>
      <div className={classes.info}>
        <Typography variant="largeTitle1" weight={800}>
          Magic project manager
        </Typography>
        <Typography variant="largeHeadline" weight={500} colorName="text/700">
          Finally, a simple tool for process and project management
        </Typography>
        <div className={classes.buttonGroup}>
          <AppLink href="/sign-up">
            <Button>Try now free</Button>
          </AppLink>
          <AppLink href="https://github.com/KUSTIKs/project-management-app">
            <Button variant="ghost" startIcon={<Icon.GithubFill />}>
              Project repo
            </Button>
          </AppLink>
        </div>
      </div>
      <Image
        src="/home-illustration.avif"
        alt="home illustration"
        height={350}
        width={520}
        className={classes.image}
      />
    </section>
  );
};

export { Hero };
