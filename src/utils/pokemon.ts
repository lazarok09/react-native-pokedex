const BASE_URL = 'https://img.pokemondb.net/sprites/sword-shield/icon/';

const LOCAL_ASSETS_URI = './assets/images/';

export const getPokemonImgSrcByName = (name: string) => {
  return `${BASE_URL}/${name}.png`;
};

// export interface PokemonType {
//   name: PokemonTypes;
//   color: PokemonTypeEnum;
// }

type Switcher = {
  [key in PokemonTypes]: PokemonTypeColors;
};

export const colorsSwitch: Switcher = {
  ['normal']: '#A8A878',
  ['fire']: '#F08030',
  ['water']: '#6890F0',
  ['electric']: '#F8D030',
  ['grass']: '#78C850',
  ['ice']: '#98D8D8',
  ['fighting']: '#C03028',
  ['poison']: '#A040A0',
  ['ground']: '#E0C068',
  ['flying']: '#A890F0',
  ['psychic']: '#F85888',
  ['bug']: '#A8B820',
  ['rock']: '#B8A038',
  ['ghost']: '#705898',
  ['dragon']: '#7038F8',
  ['dark']: '#705848',
  ['steel']: '#B8B8D0',
  ['fairy']: '#EE99AC',
};
export const getColorByType = (type: PokemonTypes) => {
  return colorsSwitch[type];
};
export const getIconByType = (type: PokemonTypes) => {
  switch (type) {
    case 'Bug':
      return LOCAL_ASSETS_URI + type + '.svg';
  }
};
