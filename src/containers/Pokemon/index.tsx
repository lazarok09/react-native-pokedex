import {SvgUri} from 'react-native-svg';
import {View} from 'react-native';
import React from 'react';

import {getPokemonImgSrcByName, getColorByType} from '../../utils/pokemon';
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
  const {types} = pokemon;

  return (
    <View>
      <PokeImage url={getPokemonImageSRC()} />
      {types?.map(type => (
        <Tag
          icon={
            <SvgUri
              width="20"
              height="20"
              uri="https://svgsilh.com/svg_v2/2451996.svg"
            />
          }
          text={type.type.name}
          color={getColorByType(type.type.name)}
        />
      ))}
    </View>
  );
};
