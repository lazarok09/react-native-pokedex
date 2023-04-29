import {View} from 'react-native';
import React from 'react';

import {
  getPokemonImgSrcByName,
  getColorByType,
  getIconByType,
} from '../../utils/pokemon';
import {PokeImage} from '../../components/PokeImage';
import usePokemon from '../../hooks/pokemon';
import {Tag} from '../../components/Tag';

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

  return (
    <View>
      <PokeImage url={getPokemonImageSRC()} />
      {pokemon?.types?.map(thisPokemon => (
        <Tag
          icon={getIconByType(thisPokemon.type.name)}
          text={thisPokemon.type.name}
          color={getColorByType(thisPokemon.type.name)}
        />
      ))}
    </View>
  );
};
