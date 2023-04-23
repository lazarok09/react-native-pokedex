import React from 'react';

import {getPokemonImgSrcByName} from '../../utils/pokemon';
import {PokeImage} from '../../components/PokeImage';
import usePokemon from '../../hooks/pokemon';

type PokemonContainerProps = {
  name: string;
};

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
  return <PokeImage url={getPokemonImageSRC()} />;
};
