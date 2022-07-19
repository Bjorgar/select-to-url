import { useQueryParams } from '../../hooks/useQueryParams';
import SelectCommon from '../SelectCommon';
import { QUERY_KEY, SELECT_LIST_NAME } from './constants';
import { ServiceSelectProps } from './types';

export default function ServiceSelect({
  list,
}: ServiceSelectProps): JSX.Element {
  const { paramValue, setQueryParam } = useQueryParams(QUERY_KEY);

  return (
    <SelectCommon
      selectListName={SELECT_LIST_NAME}
      list={list}
      setQueryParam={setQueryParam}
      selectedItem={paramValue}
    />
  );
}
