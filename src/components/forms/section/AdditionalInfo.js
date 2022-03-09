import { Button, Container, Grid, Icon, TextareaAutosize, TextField } from "@mui/material";
// date-fns
import React, { useEffect,useState } from "react";
import uuid from 'react-uuid'
import SkillList from "./component/skillList";
import "./section.css";



function Info() {
  const [info, setinfo] = React.useState("");
  const [lists, setlists] = React.useState([])
  const [disabled, setdisabled] = useState(true)
  
  
const color = lists.length < 1?"":"lightBlue"
var key = uuid()
 const add = () => {
    let list ={
        id:key,
        info,
       }
        
      setlists(prev =>[...prev,list])
      
      setinfo("")
        
     }  
  const deleteEntry = (e)=>{
    console.log(lists)
    let id = e.target.id
     setlists(lists.filter(item => item.id !== id));
  
   
  }


 useEffect(() => {
   if (info=="") {
     
       setdisabled(true)
   }else{
    setdisabled(false) 
   }
 
 }, [info])
 
  
  return (
    <Container>
      <Grid sx={{ p:1.2, display: "flex", gap: 2, flexWrap: "wrap", alignItems:"center", background:color }}>
        {lists.map((e)=>{
          return(
            <SkillList
            id={e.id}
            delete={deleteEntry}
            info={e.info}
            />
          )
        })}
      </Grid>
      <Grid sx={{ display: "flex", gap: 2, flexWrap: "wrap",mt:5 }}>
        <TextField sx={{idth:900}} onChange={(e)=> setinfo(e.target.value)} id="organisation" label="Additional Information" variant="outlined" />
      </Grid>
    </Container>
  );
}

export default Info;

 
   
 

