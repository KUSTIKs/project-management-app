import { useCallback, useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const getMatches = (query: string) => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  };

  const [isMatch, setIsMatch] = useState(getMatches(query));
  const [isLoaded, setIsLoaded] = useState(false);

  const handleChange = useCallback(() => {
    setIsMatch(getMatches(query));
    setIsLoaded(true);
  }, [query]);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [handleChange, query]);

  return { isMatch, isLoaded } as const;
};

export { useMediaQuery };
