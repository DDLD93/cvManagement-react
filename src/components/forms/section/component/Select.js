import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function BasicSelect(prop) {
  return (
    <Box sx={{ minWidth: 80 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native" >{prop.label}</InputLabel>
        <NativeSelect
          value={prop.cValue}
          disabled={prop.isDisabled}
          label="new one"
          onChange={prop.changes}
        >
          {prop.list.map(li=>(<option value={li.email}>{li.fullName}</option>))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}