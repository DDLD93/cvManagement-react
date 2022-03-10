import {Icon, TextField} from "@mui/material";
const RenderListThree = (prop) => {
    return (
        <div  style={{display:"flex", alignItems:"center"}}>
 
     <TextField disabled  defaultValue={prop.institution}  label="Institution" variant="outlined" />
     <TextField disabled  defaultValue={prop.qualification}  label="Qualification" variant="outlined" />
     <TextField disabled defaultValue={prop.date} disabled label="Started" />
     <TextField disabled defaultValue={prop.dateTwo} disabled label="Completed" />
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

  export default RenderListThree