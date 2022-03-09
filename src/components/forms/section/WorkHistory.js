import { Button, Container, Grid, Icon, TextField } from "@mui/material";
// date-fns
import React, { useEffect,useState } from "react";
import uuid from 'react-uuid'
import RenderListtwo from "./component/ListTwo";
import Typography from "@mui/material/Typography";
import "./section.css";



function WorkHistory() {
  const [date, setdate] = React.useState("");
  const [dateTwo, setdateTwo] = React.useState("");
  const [organisation, setorganisation] = React.useState("")
  const [title, settitle] = React.useState("")
  const [lists, setlists] = React.useState([])
  const [disabled, setdisabled] = useState(true)
  
  
const color = lists.length < 1?"":"lightBlue"
var key = uuid()
 const add = () => {
    let list ={
        id:key,
        organisation,
        title,
        date,
        dateTwo,
       }
        
      setlists(prev =>[...prev,list])
      
      settitle("")
      setorganisation("")
      setdate("")
      setdateTwo("")
     
     }  
  const deleteEntry = (e)=>{
    console.log(lists)
    let id = e.target.id
     setlists(lists.filter(item => item.id !== id));
  
   
  }


 useEffect(() => {
   if (date==""||organisation==""||title==""||dateTwo=="") {
     
       setdisabled(true)
   }else{
    setdisabled(false) 
   }
 
 }, [date,dateTwo,organisation,title])
 
  
  return (
    <Container>
      <Grid sx={{ p:1.2, display: "flex", gap: 2, maxWidth:650, flexWrap: "wrap", alignItems:"center", background:color }}>
        {lists.map((e)=>{
          return(
            <RenderListtwo
            id={e.id}
            delete={deleteEntry}
            organisation={e.organisation}
            title={e.title}
            date={e.date}
            dateTwo={e.dateTwo}

            />
          )
        })}
      </Grid>
      <Typography color="blue" variant="caption" sx={{ display: "block"}}>
      Add in reverse chronological order, job title, organisation and dates
        </Typography>
      <Grid sx={{ display: "flex", gap: 2, flexWrap: "wrap",mt:5 }}>
        <TextField onChange={(e)=> setorganisation(e.target.value)} id="organisation" label="Organisation" variant="outlined" />
        <TextField onChange={(e)=> settitle(e.target.value)} id="Title" label="Job Title" variant="outlined" />
        <TextField
          onChange={(e)=>setdate(e.target.value)}
          type="date"
          label="Started"
          variant="outlined"
        />
        <TextField
          onChange={(e)=>setdateTwo(e.target.value)}
          type="date"
          label="Ended"
          variant="outlined"
        />
        <Button disabled={disabled} onClick={add} variant="contained">Add</Button>
      </Grid>
    </Container>
  );
}

export default WorkHistory;

 
   
 

