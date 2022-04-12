import {Icon,Grid,TextField} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/RemoveCircleOutline';
const SkillList = (prop) => {
    return (
        <Grid gap={1} container alignItems="center" >
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
        </Grid>
    )
  }
  export default SkillList