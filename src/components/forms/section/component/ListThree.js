import {Icon, Grid,TextField} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const RenderListThree = (prop) => {
    return (
        <Grid gap={1} flexWrap="nowrap" container alignItems="center" >
 
     <TextField disabled  defaultValue={prop.institution}  label="Institution" variant="outlined" />
     <TextField disabled  defaultValue={prop.qualification}  label="Qualification" variant="outlined" />
     <TextField disabled defaultValue={prop.date}  label="Started" />
     <TextField disabled defaultValue={prop.dateTwo}  label="Completed" />
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

  export default RenderListThree