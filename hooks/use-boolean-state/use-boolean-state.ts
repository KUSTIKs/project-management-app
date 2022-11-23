import { useState } from 'react';

const useBooleanState = (defaultState: boolean) => {
  const [state, setState] = useState(defaultState);

  const setTrue = () => {
    setState(true);
  };
  const setFalse = () => {
    setState(false);
  };
  const toggle = () => {
    setState((state) => !state);
  };

  const stateActions = {
    setTrue,
    setFalse,
    toggle,
  };

  return [state, stateActions] as const;
};

export { useBooleanState };
