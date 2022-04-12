import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Grid, Icon, TextField } from '@mui/material'
import React from 'react'

function AddList(prop) {
  return (
    <Grid gap={2} container alignItems="center" >
 
     <TextField disabled  defaultValue={prop.category}  label="Category" variant="outlined" />
     <TextField disabled  defaultValue={prop.description}  label="Description" variant="outlined" />
     <TextField disabled defaultValue={prop.date}  label="Date" />
     <Icon fontSize="50"
      style={{
         cursor:"pointer",
         color:"red"
         
     }}>
         <DeleteForeverIcon
         id={prop.id}
         onClick= {prop.delete}
         />
     </Icon>
        </Grid>
  )
}

export default AddList