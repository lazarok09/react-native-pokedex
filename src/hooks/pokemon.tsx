import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';

import {API} from '../../config';

type ReturnProps = {
  pokemon: Pokedex;
  loading: boolean;
  error: any;
};

const DEFAULT_RETURN = {
  pokemon: {} as Pokedex,
  loading: false,
  error: null,
};

const usePokemon = (name: string): ReturnProps => {
  const URL = `${API}/pokemon/${name}`;

  const {data, isLoading, isError} = useQuery<ReturnProps['pokemon']>({
    queryKey: [`pokemon-${name}`],
    queryFn: () => fetch(URL).then(res => res.json()),
  });

  const memoizedData = useMemo(() => {
    if (!data) {
      return DEFAULT_RETURN;
    }

    return {pokemon: data, loading: isLoading, error: isError};
  }, [data, isLoading, isError]);

  return memoizedData;
};

export default usePokemon;
