/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { toast } from 'react-toastify';

import { URLS } from '../constants/url';
import { ResponseData } from '../types/response';
import { useFetch } from './useFetch';

interface Selections {
  services: ResponseData;
  brands: ResponseData;
}

interface UseGatAllData {
  selections: Selections | undefined;
  isLoading: boolean;
}

export function useGetAllData(): UseGatAllData {
  const [selections, setSelections] = useState<Selections>();
  const [isLoading, setLoading] = useState(true);
  const { request } = useFetch();

  const promises = useMemo(() => URLS.map((url) => request(url)), []);

  const getAllData = useCallback(async () => {
    Promise.all(promises)
      .then((data) => {
        toast('All data fetched');
        setSelections({
          services: data[0],
          brands: data[1],
        });
      })
      .catch((err) => toast(`Error: ${err.message}`))
      .finally(() => setLoading(false));
  }, [promises]);

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return {
    selections,
    isLoading,
  };
}
