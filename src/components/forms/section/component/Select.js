import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(prop) {
  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
        <InputLabel>{prop.label}</InputLabel>
        <Select
          value={prop.cValue}
          native={true}
          onChange={prop.changes}
        >
          {prop.list.map(li=>(<option value={li.value}>{li.name}</option>))}
        </Select>
      </FormControl>
    </Box>
  );
}