import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';

import {API} from '../../config';

type ReturnProps = {
  type: PokedexType;
  loading: boolean;
  error: any;
};

const DEFAULT_RETURN = {
  type: {} as PokedexType,
  loading: false,
  error: null,
};

const useType = (identifier: PokemonTypes): ReturnProps => {
  const URL = `${API}type/${identifier}`;

  const {data, isLoading, isError} = useQuery<ReturnProps['type']>({
    queryKey: [`pokemon-type-${identifier}`],
    queryFn: () => fetch(URL).then(res => res.json()),
  });

  const memoizedData = useMemo(() => {
    if (!data) {
      return DEFAULT_RETURN;
    }

    return {type: data, loading: isLoading, error: isError};
  }, [data, isLoading, isError]);

  return memoizedData;
};

export default useType;
