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
        maxRows={prop.maxRow}
        value={prop.value}
        onChange={prop.handleChange}
      />
    </>
  );
}

export default TextArea;
