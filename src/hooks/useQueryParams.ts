import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface UseQueryParams {
  paramValue: string;
  setQueryParam: (param: string) => void;
}

export function useQueryParams(paramKey: string): UseQueryParams {
  const [searchParams, setSearchParams] = useSearchParams();
  const [paramValue, setParamValue] = useState('');

  function setQueryParam(value: string): void {
    if (!value) {
      searchParams.delete(paramKey);
    } else {
      searchParams.set(paramKey, value);
    }

    setSearchParams(searchParams);
    setParamValue(value);
  }

  useEffect(() => {
    const queryParam = searchParams.get(paramKey);
    setParamValue(queryParam || '');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    paramValue,
    setQueryParam,
  };
}
