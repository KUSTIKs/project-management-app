import { FC } from 'react';
import Image from 'next/image';

import {
  AppLink,
  Button,
  Icon,
  Typography,
} from '@project-management-app/components';
import { AppLocale } from '@project-management-app/types';

import classes from './our-team.module.scss';
import { ourTeamDictionary } from './our-team.dictionary';

type Props = {
  locale: AppLocale;
};

const OurTeamSection: FC<Props> = ({ locale }) => {
  const contentMap = ourTeamDictionary.getContentMap(locale);

  return (
    <section className={classes.container}>
      <Typography variant="largeTitle2" weight={700}>
        {contentMap.title}
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
                {contentMap.member1.name}
              </Typography>
              <Typography
                variant="largeHeadline"
                weight={500}
                colorName="text/600"
              >
                {contentMap.member1.description}
              </Typography>
            </div>
            <div className={classes.buttonGroup}>
              <AppLink href="https://github.com/KUSTIKs">
                <Button variant="ghost" startIcon={<Icon.GithubFill />}>
                  Github
                </Button>
              </AppLink>
              <AppLink href="https://www.linkedin.com/in/artem-khvostyk-218953243/">
                <Button variant="ghost" startIcon={<Icon.LinkedinFill />}>
                  Linked in
                </Button>
              </AppLink>
            </div>
          </div>
        </div>
        <div className={classes.memberStatements}>
          {contentMap.member1.statements.map(({ description, title }, idx) => (
            <div className={classes.memberStatement} key={idx}>
              <Typography variant="largeTitle3" weight={600}>
                {title}
              </Typography>
              <Typography variant="text" weight={500} colorName="text/300">
                {description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { OurTeamSection };
