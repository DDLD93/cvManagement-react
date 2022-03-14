import React from "react";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";

const useStyles = styled(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  menuPaper: {
    maxHeight: 100
  }
}));

const VALID_NOTES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];
export default function SelectMenu() {
  const classes = useStyles();
  const [note, setNote] = React.useState("");

  const handleChange = event => {
    setNote(event.target.value);
  };

  return (
    <div>
      <TextField
      label='Title'
      sx={{maxWidth:100}}
      />
    </div>
  );
}