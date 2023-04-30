import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';

import {API} from '../../config';

type ReturnProps = {
  specie: PokedexSpecie;
  loading: boolean;
  error: any;
};

const DEFAULT_RETURN = {
  specie: {} as PokedexSpecie,
  loading: false,
  error: null,
};

const useSpecie = (identifier: String | number): ReturnProps => {
  const URL = `${API}pokemon-species/${identifier}`;

  const {data, isLoading, isError} = useQuery<ReturnProps['specie']>({
    queryKey: [`pokemon-specie-${identifier}`],
    queryFn: () => fetch(URL).then(res => res.json()),
  });

  const memoizedData = useMemo(() => {
    if (!data) {
      return DEFAULT_RETURN;
    }

    return {specie: data, loading: isLoading, error: isError};
  }, [data, isLoading, isError]);

  return memoizedData;
};

export default useSpecie;
