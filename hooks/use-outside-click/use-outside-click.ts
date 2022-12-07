import { RefObject, useCallback, useEffect } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>, handler?: () => void) => {
  const handleOutside = useCallback(
    (e: MouseEvent | TouchEvent) => {
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

    globalThis.addEventListener('mousedown', handleOutside);
    globalThis.addEventListener('touchstart', handleOutside);

    return () => {
      globalThis.removeEventListener('mousedown', handleOutside);
      globalThis.removeEventListener('touchstart', handleOutside);
    };
  }, [handleOutside, handler]);
};

export { useOutsideClick };
