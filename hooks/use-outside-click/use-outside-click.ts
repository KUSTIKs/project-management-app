import { RefObject, useCallback, useEffect } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, handler?: () => void) => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement) || !ref.current) return;

      const isOutsideClick = !ref.current.contains(e.target);

      if (isOutsideClick) {
        handler?.();
      }
    },
    [handler, ref]
  );

  useEffect(() => {
    if (!handler) return;

    globalThis.addEventListener('mousedown', handleOutsideClick);

    return () => {
      globalThis.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick, handler]);
};

export { useOutsideClick };
