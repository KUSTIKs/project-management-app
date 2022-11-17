import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button, Icon, Typography } from '@project-management-app/components';

import classes from './our-team.module.scss';

const OurTeam: FC = () => {
  return (
    <section className={classes.container}>
      <Typography variant="largeTitle2" weight={700}>
        Our Team
      </Typography>
      <div className={classes.member}>
        <div className={classes.memberInfo}>
          <Image
            src="/my-picture.png"
            alt="my picture"
            className={classes.memberImage}
            height={250}
            width={250}
          />
          <div className={classes.memberTextInfo}>
            <div>
              <Typography variant="largeTitle2" weight={600} as="p">
                Artem Khvostyk
              </Typography>
              <Typography
                variant="largeHeadline"
                weight={500}
                colorName="text/600"
              >
                Developer, designer
              </Typography>
            </div>
            <div className={classes.buttonGroup}>
              <Link href="https://github.com/KUSTIKs">
                <Button variant="ghost" startIcon={<Icon.GithubFill />}>
                  Github
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/artem-khvostyk-218953243/">
                <Button variant="ghost" startIcon={<Icon.LinkedinFill />}>
                  Linked in
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.memberStatements}>
          <div className={classes.memberStatement}>
            <Typography variant="largeTitle3" weight={600}>
              Quisque nunc enim
            </Typography>
            <Typography variant="text" weight={500} colorName="text/300">
              Egestas proin et consequat aliquet purus sed massa. Et ipsum elit
              dui nibh in ultrices tristique cras suspendisse.
            </Typography>
          </div>
          <div className={classes.memberStatement}>
            <Typography variant="largeTitle3" weight={600}>
              Tellus quam tempus
            </Typography>
            <Typography variant="text" weight={500} colorName="text/300">
              Accumsan vulputate proin nulla morbi rhoncus. Sit donec nulla
              facilisis orci est erat tortor felis. Vestibulum ultricies ut cras
              viverra ut.
            </Typography>
          </div>
          <div className={classes.memberStatement}>
            <Typography variant="largeTitle3" weight={600}>
              Purus nisl nulla
            </Typography>
            <Typography variant="text" weight={500} colorName="text/300">
              Aliquam aliquam faucibus vitae risus hac scelerisque posuere.
              Malesuada quis vitae bibendum euismod adipiscing nisl. Volutpat
              massa fringilla nunc feugiat scelerisque odio commodo et.
            </Typography>
          </div>
          <div className={classes.memberStatement}>
            <Typography variant="largeTitle3" weight={600}>
              Eget aenean
            </Typography>
            <Typography variant="text" weight={500} colorName="text/300">
              Augue scelerisque posuere turpis enim viverra malesuada ipsum.
              Mattis non nisi pretium bibendum. Suscipit at eget vitae amet ut
              nunc eu eget adipiscing.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export { OurTeam };
