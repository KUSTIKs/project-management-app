import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const getMatches = (query: string) => {
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(getMatches(query));

  const handleChange = useCallback(() => {
    setMatches(getMatches(query));
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [handleChange, query]);

  return matches;
};

export { useMediaQuery };
