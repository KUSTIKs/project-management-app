'use client';

import {
  ChangeEventHandler,
  FC,
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useDebouncedCallback } from 'use-debounce';
import { AnimatePresence, motion } from 'framer-motion';

import { Icon, Typography } from '@project-management-app/components';
import {
  useAppContext,
  useAppRouter,
  useOutsideClick,
  useOutsideFocus,
} from '@project-management-app/hooks';

import classes from './search-modal.module.scss';
import { SearchItem, Tabs } from './components/components';
import { useSearchFuse } from './hooks/hooks';
import {
  dropIn,
  fadeIn,
  iconToItemTypeMap,
  itemsWrapperVariants,
} from './helpers/helpers';
import { searchModalDictionary } from './search-modal.dictionary';

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

type SearchTab = 'Boards' | 'Tasks' | 'All';

const SearchModal: FC<Props> = ({ handleClose, isOpen }) => {
  const { locale } = useAppContext();
  const contentMap = searchModalDictionary.getContentMap({ locale });
  const { appPathname, searchParams } = useAppRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<SearchTab>('All');
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState(value);
  const debouncedSetSearchValue = useDebouncedCallback(setSearchValue, 500, {
    maxWait: 2000,
  });
  const { fuse, isLoading } = useSearchFuse({ tab });
  const [container, setContainer] = useState<HTMLElement>();
  const register = useOutsideFocus(handleClose);

  const results = useMemo(() => {
    return fuse.search(searchValue);
  }, [fuse, searchValue]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const clearValue = () => {
    setSearchValue('');
    setValue('');
  };

  const setOverflow = (value: string) => {
    if (typeof window === 'undefined') return;
    document.documentElement.style.overflow = value;
  };

  useEffect(() => {
    debouncedSetSearchValue(value);
  }, [debouncedSetSearchValue, value]);

  useEffect(() => {
    setOverflow(isOpen ? 'hidden' : 'unset');

    return () => {
      setOverflow('unset');
    };
  }, [isOpen]);

  useEffect(() => {
    handleClose();
  }, [handleClose, appPathname, searchParams]);

  useEffect(() => {
    const container = document.getElementById('modal-portal');

    if (!container) {
      console.error('Could not found element with id "modal-portal"');
      return;
    }

    setContainer(container);
  }, []);

  useEffect(() => {
    if (isOpen) return;
    clearValue();
  }, [isOpen]);

  useOutsideClick(wrapperRef, handleClose);

  const modal = (
    <motion.div
      className={classes.backdrop}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      exit="hidden"
      {...register}
    >
      <motion.div
        className={classes.wrapper}
        ref={wrapperRef}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={classes.top}>
          <div className={classes.inputWrapper}>
            <Icon.SearchLine className={classes.searchIcon} />
            <input
              type="text"
              placeholder={contentMap.typeHere}
              value={value}
              className={classes.input}
              onChange={handleChange}
              autoFocus
            />
            {value && (
              <button className={classes.clearButton} onClick={clearValue}>
                <Icon.CloseCircleFill />
              </button>
            )}
          </div>
          {!isLoading && searchValue && (
            <Tabs<SearchTab>
              defaultTab={tab}
              tabs={[
                { name: contentMap.all, value: 'All' },
                { name: contentMap.boards, value: 'Boards' },
                { name: contentMap.tasks, value: 'Tasks' },
              ]}
              handleChange={setTab}
            />
          )}
        </div>

        <AnimatePresence>
          {!isLoading && searchValue && (
            <motion.div
              className={classes.resultsWrapper}
              variants={itemsWrapperVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {results.length === 0 && (
                <Typography
                  variant="headline"
                  weight={600}
                  colorName="text/400"
                  className={classes.title}
                  style={{ textAlign: 'center', padding: 10 }}
                >
                  {contentMap.nothingFound}
                </Typography>
              )}
              {results.map(({ refIndex, item }, index, arr) => (
                <Fragment key={refIndex}>
                  <SearchItem
                    icon={iconToItemTypeMap.get(item.type)}
                    href={item.href}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                  {index < arr.length - 1 && (
                    <div className={classes.separator} />
                  )}
                </Fragment>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );

  if (!container) {
    return null;
  }

  return createPortal(
    <AnimatePresence initial={false} mode="wait">
      {isOpen ? modal : null}
    </AnimatePresence>,
    container
  );
};

export { SearchModal };
