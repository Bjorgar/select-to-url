import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { ResponseData } from '../../types/response';

interface SelectProps {
  selectListName: string;
  list: ResponseData;
  selectedItem: string;
  setQueryParam: (value: string) => void;
}

export default function SelectCommon({
  list,
  selectedItem,
  selectListName,
  setQueryParam,
}: SelectProps): JSX.Element {
  const handleChange = (event: SelectChangeEvent) => {
    setQueryParam(event.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{selectListName}</InputLabel>
      <Select
        value={selectedItem}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          list.map(({ label }) => (
            <MenuItem value={label}>{label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}
