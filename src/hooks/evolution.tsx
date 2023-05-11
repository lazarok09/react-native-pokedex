import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';

import {API} from '../../config';

type ReturnProps = {
  evolution: PokedexEvolution;
  loading: boolean;
  error: any;
};

const DEFAULT_RETURN = {
  evolution: {} as PokedexEvolution,
  loading: false,
  error: null,
};

const useEvolution = (identifier: number | string): ReturnProps => {
  const URL = `${API}evolution-chain/${identifier}`;

  const {data, isLoading, isError} = useQuery<ReturnProps['evolution']>({
    queryKey: [`evolution-${identifier}`],
    queryFn: () => fetch(URL).then(res => res.json()),
  });

  const memoizedData = useMemo(() => {
    if (!data) {
      return DEFAULT_RETURN;
    }

    return {evolution: data, loading: isLoading, error: isError};
  }, [data, isLoading, isError]);

  return memoizedData;
};

export default useEvolution;
