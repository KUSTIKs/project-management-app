import { FocusEventHandler } from 'react';

const useOutsideFocus = (handler?: () => void) => {
  const onBlur: FocusEventHandler<HTMLElement> = ({ currentTarget }) => {
    requestAnimationFrame(() => {
      const hasFocusedElementInside = currentTarget.contains(
        document.activeElement
      );

      if (!hasFocusedElementInside) {
        handler?.();
      }
    });
  };

  return { onBlur };
};

export { useOutsideFocus };
