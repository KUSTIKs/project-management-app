const API_URL = 'https://kanban-fdqg.onrender.com';

const appFetch = (resorce: string, init?: RequestInit) => {
  const fetchUrl = `${API_URL}${resorce}`;
  return fetch(fetchUrl, init);
};

export { appFetch };
