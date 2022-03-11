import { TextField } from "@mui/material";
import React from "react";
import "../section.css";

function TextArea(prop) {
  return (
    <>
      <TextField
        margin="dense"
        size="medium"
        id={prop.id}
        label={prop.label}
        multiline
        maxRows={prop.maxRows}
        value={prop.value}
        onChange={prop.change}
      />
    </>
  );
}

export default TextArea;
