import {Icon, TextField} from "@mui/material";
const RenderListtwo = (prop) => {
    return (
        <div  style={{display:"flex", alignItems:"center"}}>
 
     <TextField disabled  defaultValue={prop.organisation}  label="Organisation" variant="outlined" />
     <TextField disabled  defaultValue={prop.title}  label="Job Title" variant="outlined" />
     <TextField defaultValue={prop.date} disabled label="Started" />
     <TextField defaultValue={prop.dateTwo} disabled label="Ended" />
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
  export default RenderListtwo
  