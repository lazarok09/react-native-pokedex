import {API} from '../../config';

export const getTypes = async (
  identifier: string | number,
): Promise<PokedexType> => {
  const URL = `${API}type/${identifier}`;
  const response = await fetch(URL);
  const data: PokedexType = await response.json();
  return data;
};
