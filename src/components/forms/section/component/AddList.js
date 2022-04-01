import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Icon, TextField } from '@mui/material'
import React from 'react'

function AddList(prop) {
  return (
    <div  style={{display:"flex", alignItems:"center"}}>
 
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
        </div>
  )
}

export default AddList