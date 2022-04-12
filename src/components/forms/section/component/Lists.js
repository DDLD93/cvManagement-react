import {Icon,Grid,TextField} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const RenderList = (prop) => {
    return (
<Grid gap={1} flexWrap="nowrap" container alignItems="center" > 
     <TextField disabled  defaultValue={prop.orgnisation}  label="Orgnisation" variant="outlined" />
     <TextField disabled  defaultValue={prop.title}  label="Title" variant="outlined" />
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
  export default RenderList