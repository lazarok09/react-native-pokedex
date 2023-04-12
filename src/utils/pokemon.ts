const BASE_URL = 'https://img.pokemondb.net/sprites/sword-shield/icon/';

export const getPokemonImgSrc = (name: string) => {
  return `${BASE_URL}/${name}.png`;
};
