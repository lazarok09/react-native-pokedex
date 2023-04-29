import React from 'react';

import Electric from '../assets/images/electric.svg';
import Fighting from '../assets/images/fighting.svg';
import Psychic from '../assets/images/psychic.svg';
import Dragon from '../assets/images/dragon.svg';
import Flying from '../assets/images/flying.svg';
import Ground from '../assets/images/ground.svg';
import Normal from '../assets/images/normal.svg';
import Poison from '../assets/images/poison.svg';
import Fairy from '../assets/images/fairy.svg';
import Ghost from '../assets/images/ghost.svg';
import Grass from '../assets/images/grass.svg';
import Steel from '../assets/images/steel.svg';
import Water from '../assets/images/water.svg';
import Dark from '../assets/images/dark.svg';
import Fire from '../assets/images/fire.svg';
import Rock from '../assets/images/rock.svg';
import Bug from '../assets/images/bug.svg';
import Ice from '../assets/images/ice.svg';

const BASE_URL = 'https://img.pokemondb.net/sprites/sword-shield/icon/';

export const getPokemonImgSrcByName = (name: string) => {
  return `${BASE_URL}/${name}.png`;
};

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
export const getIconByType = (type: PokemonTypes): React.ReactNode => {
  switch (type) {
    case 'bug':
      return <Bug width={20} height={20} />;
    case 'dark':
      return <Dark width={20} height={20} />;
    case 'dragon':
      return <Dragon width={20} height={20} />;
    case 'electric':
      return <Electric width={20} height={20} />;
    case 'fairy':
      return <Fairy width={20} height={20} />;
    case 'fighting':
      return <Fighting width={20} height={20} />;
    case 'fire':
      return <Fire width={20} height={20} />;
    case 'flying':
      return <Flying width={20} height={20} />;
    case 'ghost':
      return <Ghost width={20} height={20} />;
    case 'grass':
      return <Grass width={20} height={20} />;
    case 'ground':
      return <Ground width={20} height={20} />;
    case 'ice':
      return <Ice width={20} height={20} />;
    case 'normal':
      return <Normal width={20} height={20} />;
    case 'poison':
      return <Poison width={20} height={20} />;
    case 'psychic':
      return <Psychic width={20} height={20} />;
    case 'rock':
      return <Rock width={20} height={20} />;
    case 'steel':
      return <Steel width={20} height={20} />;
    case 'water':
      return <Water width={20} height={20} />;
    default:
      return null;
  }
};
