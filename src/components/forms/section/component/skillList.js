import {Icon, TextField} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const SkillList = (prop) => {
    return (
        <div  style={{display:"flex", alignItems:"center"}}>
 
     <TextField disabled  defaultValue={prop.skill}  label="Skill" variant="outlined" />
     
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
  export default SkillList