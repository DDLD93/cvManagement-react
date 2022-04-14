import {Icon,Grid,TextField} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const SkillList = (prop) => {
    return (
        <Grid sx={{width:250}} gap={1} container alignItems="center" >
     <TextField disabled  defaultValue={prop.skill} variant="outlined" />
     
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
  export default SkillList