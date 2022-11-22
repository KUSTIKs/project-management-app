'use client';

import { FC } from 'react';

import { AppLocale } from '@project-management-app/types';
import {
  Button,
  Column,
  Icon,
  TaskCard,
  Typography,
} from '@project-management-app/components';

import classes from './board.module.scss';

type Props = {
  params: {
    locale: AppLocale;
    id: string;
  };
};

const BoardPage: FC<Props> = ({ params }) => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.topInfo}>
          <Typography variant="title1">Hello, world</Typography>
          <div className={classes.group}>
            <Button size="m" variant="ghost" startIcon={<Icon.EditLine />}>
              Edit
            </Button>
            <Button size="m" startIcon={<Icon.AddLine />}>
              New Column
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.columnsWrapperContainer}>
        <div className={classes.columnsWrapper}>
          <Column title="Guyana">
            <TaskCard
              title="Burundi"
              description="Laborum cillum sit officia irure id dolor Lorem eiusmod ad sit ea in anim excepteur."
            />
            <TaskCard
              title="British Virgin Islands"
              description="Anim ullamco ea exercitation mollit cupidatat."
            />
            <TaskCard
              title="Burkina Faso"
              description="Est adipisicing magna reprehenderit qui amet ipsum."
            />
            <TaskCard
              title="Uzbekistan"
              description="Labore exercitation in Lorem anim voluptate qui cillum consectetur fugiat Lorem et."
            />
            <TaskCard
              title="Tunisia"
              description="Qui culpa non esse duis ullamco ex ullamco deserunt non enim eu laboris id."
            />
            <TaskCard
              title="Tajikistan"
              description="Occaecat aliqua eu sunt magna adipisicing occaecat irure ex est exercitation eiusmod et dolore officia."
            />
            <TaskCard
              title="Nicaragua"
              description="Eiusmod cupidatat do aliquip minim aliquip ad."
            />
          </Column>
          <Column title="American Samoa">
            <TaskCard
              title="Curaçao"
              description="Deserunt exercitation velit cupidatat cillum ad officia nisi esse duis sit ut aute dolore."
            />
            <TaskCard
              title="New Zealand"
              description="Sit id cupidatat do dolor ad et incididunt mollit deserunt irure irure non culpa et."
            />
            <TaskCard
              title="Japan"
              description="Minim laboris dolor aliquip laboris id labore consectetur ut anim."
            />
          </Column>
          <Column title="Guyana">
            <TaskCard
              title="Burundi"
              description="Laborum cillum sit officia irure id dolor Lorem eiusmod ad sit ea in anim excepteur."
            />
            <TaskCard
              title="British Virgin Islands"
              description="Anim ullamco ea exercitation mollit cupidatat."
            />
            <TaskCard
              title="Burkina Faso"
              description="Est adipisicing magna reprehenderit qui amet ipsum."
            />
            <TaskCard
              title="Uzbekistan"
              description="Labore exercitation in Lorem anim voluptate qui cillum consectetur fugiat Lorem et."
            />
            <TaskCard
              title="Tunisia"
              description="Qui culpa non esse duis ullamco ex ullamco deserunt non enim eu laboris id."
            />
            <TaskCard
              title="Tajikistan"
              description="Occaecat aliqua eu sunt magna adipisicing occaecat irure ex est exercitation eiusmod et dolore officia."
            />
            <TaskCard
              title="Nicaragua"
              description="Eiusmod cupidatat do aliquip minim aliquip ad."
            />
          </Column>
          <Column title="American Samoa">
            <TaskCard
              title="Curaçao"
              description="Deserunt exercitation velit cupidatat cillum ad officia nisi esse duis sit ut aute dolore."
            />
            <TaskCard
              title="New Zealand"
              description="Sit id cupidatat do dolor ad et incididunt mollit deserunt irure irure non culpa et."
            />
            <TaskCard
              title="Japan"
              description="Minim laboris dolor aliquip laboris id labore consectetur ut anim."
            />
          </Column>
          <Column title="Guyana">
            <TaskCard
              title="Burundi"
              description="Laborum cillum sit officia irure id dolor Lorem eiusmod ad sit ea in anim excepteur."
            />
            <TaskCard
              title="British Virgin Islands"
              description="Anim ullamco ea exercitation mollit cupidatat."
            />
            <TaskCard
              title="Burkina Faso"
              description="Est adipisicing magna reprehenderit qui amet ipsum."
            />
            <TaskCard
              title="Uzbekistan"
              description="Labore exercitation in Lorem anim voluptate qui cillum consectetur fugiat Lorem et."
            />
            <TaskCard
              title="Tunisia"
              description="Qui culpa non esse duis ullamco ex ullamco deserunt non enim eu laboris id."
            />
            <TaskCard
              title="Tajikistan"
              description="Occaecat aliqua eu sunt magna adipisicing occaecat irure ex est exercitation eiusmod et dolore officia."
            />
            <TaskCard
              title="Nicaragua"
              description="Eiusmod cupidatat do aliquip minim aliquip ad."
            />
          </Column>
          <Column title="American Samoa">
            <TaskCard
              title="Curaçao"
              description="Deserunt exercitation velit cupidatat cillum ad officia nisi esse duis sit ut aute dolore."
            />
            <TaskCard
              title="New Zealand"
              description="Sit id cupidatat do dolor ad et incididunt mollit deserunt irure irure non culpa et."
            />
            <TaskCard
              title="Japan"
              description="Minim laboris dolor aliquip laboris id labore consectetur ut anim."
            />
          </Column>
          <Column title="Guyana">
            <TaskCard
              title="Burundi"
              description="Laborum cillum sit officia irure id dolor Lorem eiusmod ad sit ea in anim excepteur."
            />
            <TaskCard
              title="British Virgin Islands"
              description="Anim ullamco ea exercitation mollit cupidatat."
            />
            <TaskCard
              title="Burkina Faso"
              description="Est adipisicing magna reprehenderit qui amet ipsum."
            />
            <TaskCard
              title="Uzbekistan"
              description="Labore exercitation in Lorem anim voluptate qui cillum consectetur fugiat Lorem et."
            />
            <TaskCard
              title="Tunisia"
              description="Qui culpa non esse duis ullamco ex ullamco deserunt non enim eu laboris id."
            />
            <TaskCard
              title="Tajikistan"
              description="Occaecat aliqua eu sunt magna adipisicing occaecat irure ex est exercitation eiusmod et dolore officia."
            />
            <TaskCard
              title="Nicaragua"
              description="Eiusmod cupidatat do aliquip minim aliquip ad."
            />
          </Column>
          <Column title="American Samoa">
            <TaskCard
              title="Curaçao"
              description="Deserunt exercitation velit cupidatat cillum ad officia nisi esse duis sit ut aute dolore."
            />
            <TaskCard
              title="New Zealand"
              description="Sit id cupidatat do dolor ad et incididunt mollit deserunt irure irure non culpa et."
            />
            <TaskCard
              title="Japan"
              description="Minim laboris dolor aliquip laboris id labore consectetur ut anim."
            />
          </Column>
        </div>
      </div>
    </>
  );
};

export default BoardPage;
