import {Icon, TextField} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const RenderList = (prop) => {
    return (
        <div  style={{display:"flex", alignItems:"center"}}>
 
     <TextField disabled  defaultValue={prop.orgnisation}  label="Orgnisation" variant="outlined" />
     <TextField disabled  defaultValue={prop.title}  label="Title" variant="outlined" />
     <TextField disabled defaultValue={prop.date} disabled label="Date" />
     <Icon fontSize="50"
     onClick= {prop.delete}
     id={prop.id}
      style={{
         cursor:"pointer"
     }}>
         <RemoveCircleOutlineIcon/>
     </Icon>
        </div>
    )
  }
  export default RenderList