export const fetcher = async (keys) => {
  const response = await fetch(keys.queryKey[1]);
  const data = await response.json();
  return data;
};
