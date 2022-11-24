'use client';

import {
  forwardRef,
  HTMLAttributes,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { mergeRefs } from 'react-merge-refs';

type Props = HTMLAttributes<HTMLDivElement>;

const DragScroll = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const [isScrolling, setIsScrolling] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const handleMouseUp: MouseEventHandler = () => {
    setIsScrolling(false);
  };
  const handleMouseDown: MouseEventHandler = (e) => {
    setIsScrolling(true);
    setClientX(e.clientX);
  };
  const handleMouseMove: MouseEventHandler = (e) => {
    if (!isScrolling) return;
    setScrollX((state) => state - e.clientX + clientX);
    setClientX(e.clientX);
  };

  useEffect(() => {
    if (!wrapperRef.current) return;

    wrapperRef.current.scroll({
      left: scrollX,
    });
  }, [scrollX]);

  return (
    <div
      {...props}
      ref={mergeRefs([ref, wrapperRef])}
      onMouseUp={handleMouseUp}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      style={{
        userSelect: isScrolling ? 'none' : 'unset',
      }}
    />
  );
});

export { DragScroll };
