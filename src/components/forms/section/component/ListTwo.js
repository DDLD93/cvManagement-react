import {Icon,Grid ,TextField} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const RenderListtwo = (prop) => {
    return (
<Grid gap={1} flexWrap="nowrap" container alignItems="center" > 
     <TextField disabled  defaultValue={prop.organisation}  label="Organisation" variant="outlined" />
     <TextField disabled  defaultValue={prop.title}  label="Job Title" variant="outlined" />
     <TextField defaultValue={prop.date} disabled label="Started" />
     <TextField defaultValue={prop.dateTwo} disabled label="Ended" />
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
  export default RenderListtwo
  