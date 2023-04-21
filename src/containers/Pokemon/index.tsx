import React from 'react';

import {NamedAvatarProps} from '../../components/namedAvatar';
import {getPokemonImgSrcByName} from '../../utils/pokemon';
import {NamedAvatar} from '../../components/namedAvatar';

type PokemonContainerProps = Pick<NamedAvatarProps, 'name'>;
export const Pokemon = (props: PokemonContainerProps) => {
  return (
    <NamedAvatar name={props.name} url={getPokemonImgSrcByName(props.name)} />
  );
};
