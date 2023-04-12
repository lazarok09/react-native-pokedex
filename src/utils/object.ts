export const objectToQuery = (params: Record<string, string | number>) => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    searchParams.append(key, String(value));
  }

  return '?' + searchParams.toString();
};
