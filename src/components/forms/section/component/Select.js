import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectDropdown(prop) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
      <FormControl variant="standard" style={{ minWidth: "70px" }}>
        <InputLabel>{prop.Title}</InputLabel>
        <Select
        style={{ padding:"5px"}}
          value={age}
          onChange={handleChange}
        >
          {prop.menuItem.map(e => (
            <MenuItem value={e.value}>{e.name}</MenuItem>   
          ))}
        </Select>
      </FormControl>
  );
}