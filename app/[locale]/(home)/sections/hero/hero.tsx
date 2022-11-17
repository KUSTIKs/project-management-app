import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button, Icon, Typography } from '@project-management-app/components';

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
          <Link href="/sign-up">
            <Button>Try now free</Button>
          </Link>
          <Link href="https://github.com/KUSTIKs/project-management-app">
            <Button variant="ghost" startIcon={<Icon.GithubFill />}>
              Project repo
            </Button>
          </Link>
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
