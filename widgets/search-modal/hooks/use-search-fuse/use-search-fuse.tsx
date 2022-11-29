import { useQuery } from 'react-query';
import { ComponentProps, useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Fuse from 'fuse.js';

import { QueryKey } from '@project-management-app/enums';
import { boardsService, tasksService } from '@project-management-app/services';

import { SearchItem } from 'widgets/search-modal/components/components';
import { SearchItemType } from 'widgets/search-modal/enums/enums';

type SearchItem = ComponentProps<typeof SearchItem> & {
  id: string;
  type: SearchItemType;
};
type SearchTab = 'Boards' | 'Tasks' | 'All';

const useSearchFuse = ({ tab }: { tab: SearchTab }) => {
  const { data: boards, isLoading: isBoardsLoading } = useQuery({
    queryKey: [QueryKey.BOARDS],
    queryFn: boardsService.getAll,
  });
  const { data: tasks, isLoading: isTasksLoading } = useQuery({
    queryKey: [QueryKey.TASKS],
    queryFn: tasksService.getAllFromAll,
  });
  const [searchList, setSearchList] = useState<SearchItem[]>([]);

  const boardItems = useMemo<SearchItem[]>(
    () =>
      (boards ?? []).map(({ description, id, title }) => ({
        id,
        title,
        subtitle: description,
        type: SearchItemType.BOARD,
        href: `/boards/${id}`,
      })),
    [boards]
  );
  const taskItems = useMemo<SearchItem[]>(
    () =>
      (tasks ?? []).map(({ description, id, title, boardId, columnId }) => ({
        id,
        title,
        subtitle: (
          <ReactMarkdown allowedElements={[]} unwrapDisallowed>
            {description}
          </ReactMarkdown>
        ),
        type: SearchItemType.TASK,
        href: `/boards/${boardId}?columnId=${columnId}&taskId=${id}`,
      })),
    [tasks]
  );

  const fuse = useMemo(
    () =>
      new Fuse(searchList, {
        keys: ['title', 'subtitle'],
      }),
    [searchList]
  );

  const isLoading = isBoardsLoading || isTasksLoading;

  useEffect(() => {
    if (tab === 'Boards') {
      setSearchList(boardItems);
    } else if (tab === 'Tasks') {
      setSearchList(taskItems);
    } else {
      setSearchList([...boardItems, ...taskItems]);
    }
  }, [boardItems, tab, taskItems]);

  return { fuse, isLoading };
};

export { useSearchFuse };
