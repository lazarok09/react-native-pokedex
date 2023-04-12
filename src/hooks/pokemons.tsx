import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';

import {objectToQuery} from '../utils/object';
import {API} from '../../config';

type Pokemon = {
  id: number;
  name: string;
};

type ReturnProps = {
  pokemons: Pokemon[];
  loading: boolean;
  error: any;
};
interface PokemonResponse<T> {
  count: number;
  next: string;
  previus: string | null;
  results: T;
}

const DEFAULT_RETURN = {
  pokemons: [],
  loading: false,
  error: null,
};

const usePokemons = (limit = 20): ReturnProps => {
  const URL = `${API}/pokemon${objectToQuery({
    limit,
  })}`;

  const {data, isLoading, isError} = useQuery<
    PokemonResponse<ReturnProps['pokemons']>
  >({
    queryKey: ['pokemonsData'],
    queryFn: () => fetch(URL).then(res => res.json()),
  });

  const memoizedData = useMemo(() => {
    if (!data) {
      return DEFAULT_RETURN;
    }

    return {pokemons: data.results, loading: isLoading, error: isError};
  }, [data, isLoading, isError]);

  return memoizedData;
};

export default usePokemons;
