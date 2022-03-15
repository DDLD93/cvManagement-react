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
      <FormControl variant="standard" sx={{ m: 1}}>
        <InputLabel>Title</InputLabel>
        <Select
          value={age}
          onChange={handleChange}
          label="Title"
        >
           <MenuItem value="One">Dr</MenuItem>   
           <MenuItem value="Two">Prof</MenuItem>  
        </Select>
      </FormControl>
  );
}