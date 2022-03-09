import { Button, Container, Grid, Icon, TextField, Typography } from "@mui/material";
// date-fns
import React, { useEffect,useState } from "react";
import uuid from 'react-uuid'
import RenderList from "./component/Lists"
import "./section.css";



function Education() {
  const [value, setValue] = React.useState("");
  const [qualf, setqualf] = React.useState("")
  const [inst, setinst] = React.useState("")
  const [lists, setlists] = React.useState([])
  const [disabled, setdisabled] = useState(true)
  
const color = lists.length < 1?"":"lightBlue"
var key = uuid()
 const add = () => {
    let list ={
        id:key,
        institute:inst,
        qualification:qualf,
        date: value }
        
      setlists(prev =>[...prev,list])
      setcount(prevCount => prevCount++)
      setinst("")
      setqualf("")
      setValue("")
     
     }  
  const deleteEntry = (e)=>{
    console.log(lists)
    let id = e.target.id
     setlists(lists.filter(item => item.id !== id));
  
   
  }


 useEffect(() => {
   if (value==""||inst==""||qualf=="") {
     
       setdisabled(true)
   }else{
    setdisabled(false) 
   }
 
 }, [value,inst,qualf])
 
  
  return (
    <Container>
      <Grid sx={{ p:1.2, display: "flex", gap: 2, maxWidth:650, flexWrap: "wrap", alignItems:"center", background:color }}>
        {lists.map((e)=>{
          return(
            <RenderList
            id={e.id}
            delete={deleteEntry}
            institute={e.institute}
            qualification={e.qualification}
            date={e.date}

            />
          )
        })}
      </Grid>
      <Typography color="blue" variant="caption" sx={{ display: "block"}}>
      In reverse chronological order, add the institutions where you studied, when you studied
        and outcomes.
        </Typography>
      <Grid sx={{ display: "flex", gap: 2, flexWrap: "wrap",mt:5 }}>
        <TextField onChange={(e)=> setinst(e.target.value)} id="Institution" label="Institution" variant="outlined" />
        <TextField value={qualf} onChange={(e)=> setqualf(e.target.value)} id="Qualification" label="Qualification" variant="outlined" />
        <TextField
          onChange={(e)=>setValue(e.target.value)}
          type="date"
          id="Qualification"
          defaultValue="date"
          variant="outlined"
        />
        <Button disabled={disabled} onClick={add} variant="contained">Add</Button>
      </Grid>
    </Container>
  );
}

export default Education;

 
   
 

