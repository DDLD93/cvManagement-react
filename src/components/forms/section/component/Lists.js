import {Icon, TextField} from "@mui/material";
const RenderList = (prop) => {
    return (
        <div  style={{display:"flex", alignItems:"center"}}>
 
     <TextField disabled  defaultValue={prop.institute}  label="Institution" variant="outlined" />
     <TextField disabled  defaultValue={prop.qualification}  label="Qualification" variant="outlined" />
     <TextField defaultValue={prop.date} disabled label="Date" />
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
  export default RenderList