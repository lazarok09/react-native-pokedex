import React from 'react';

import {NamedAvatarProps} from '../../components/namedAvatar';
import {getPokemonImgSrcByName} from '../../utils/pokemon';
import {NamedAvatar} from '../../components/namedAvatar';
import usePokemon from '../../hooks/pokemon';

type PokemonContainerProps = Pick<NamedAvatarProps, 'name'>;

export const Pokemon = (props: PokemonContainerProps) => {
  const {pokemon} = usePokemon(props.name);

  function getPokemonImageSRC() {
    if (Object.keys(pokemon).length > 0) {
      const hasABetterImage = !!pokemon?.sprites?.front_default?.length;
      if (hasABetterImage) {
        return pokemon.sprites.front_default;
      }
    }
    return getPokemonImgSrcByName(props.name);
  }
  return <NamedAvatar name={props.name} url={getPokemonImageSRC()} />;
};
