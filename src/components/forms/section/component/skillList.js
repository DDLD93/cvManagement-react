import {Icon, TextField} from "@mui/material";
const SkillList = (prop) => {
    return (
        <div  style={{display:"flex", alignItems:"center"}}>
 
     <TextField disabled  defaultValue={prop.skill}  label="Skill" variant="outlined" />
     
     <Icon fontSize="50"
     onClick= {prop.delete}
     id={prop.id}
      style={{
         cursor:"pointer"
     }}>
         delete
     </Icon>
        </div>
    )
  }
  export default SkillList