import {Icon, TextField} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const RenderListThree = (prop) => {
    return (
        <div  style={{display:"flex", alignItems:"center"}}>
 
     <TextField disabled  defaultValue={prop.institution}  label="Institution" variant="outlined" />
     <TextField disabled  defaultValue={prop.qualification}  label="Qualification" variant="outlined" />
     <TextField disabled defaultValue={prop.date}  label="Started" />
     <TextField disabled defaultValue={prop.dateTwo}  label="Completed" />
     <Icon fontSize="50"
      style={{
         cursor:"pointer",
         color:"red"
         
     }}>
         <RemoveCircleOutlineIcon
         id={prop.id}
         onClick= {prop.delete}
         />
     </Icon>
        </div>
    )
  }

  export default RenderListThree