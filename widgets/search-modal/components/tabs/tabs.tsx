'use client';

import { useEffect, useState } from 'react';

import { Option } from '@project-management-app/types';
import { isString } from '@project-management-app/helpers';

import classes from './tabs.module.scss';
import { Tab } from '../components';

type Props<T extends string> = {
  tabs: Option<T>[];
  defaultTab: T;
  handleChange: (value: T) => void;
};

const Tabs = <T extends string>({
  handleChange,
  tabs,
  defaultTab,
}: Props<T>) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    handleChange(activeTab);
  }, [activeTab, handleChange]);

  return (
    <div className={classes.wrapper}>
      {tabs.map((tab) => {
        const name = isString(tab) ? tab : tab.name;
        const value = isString(tab) ? tab : tab.value;

        return (
          <Tab
            key={value}
            handleClick={() => setActiveTab(value)}
            isActive={value === activeTab}
          >
            {name}
          </Tab>
        );
      })}
    </div>
  );
};

export { Tabs };
