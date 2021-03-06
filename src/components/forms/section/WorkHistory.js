import { Button, Container, Fab, Grid, Icon, TextField } from "@mui/material";
// date-fns
import uuid from 'react-uuid'
import RenderListtwo from "./component/ListTwo";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../../../context/state";

import "./section.css";



function WorkHistory() {
  const [organisation, setorganisation] = React.useState("")
  const [title, settitle] = React.useState("")
  const [lists, setlists] = React.useState([])
  const [disabled, setdisabled] = useState(true)
  const [focusStart, setFocusStart] = useState(null);
  const [hasValueStart, setHasValueStart] = useState("");
  const [focusEnd, setFocusEnd] = useState(null);
  const [hasValueEnd, setHasValueEnd] = useState("");
  const textInput = React.useRef(null);

  const { buttonState,setFormPost,user } = useContext(StateContext);

 
  
  
const color = lists.length < 1?"":"lightBlue"
var key = uuid()
 const add = () => {
    let list ={
        id:key,
        organisation,
        title,
        date:hasValueStart,
        dateTwo:hasValueEnd,
       }
        
      setlists(prev =>[...prev,list])
      
      settitle("")
      setorganisation("")
      textInput.current.value = null;
     
     }  
  const deleteEntry = (e)=>{
    console.log(lists)
    let id = e.target.id
     setlists(lists.filter(item => item.id !== id));
  }
  const readyState = () => {
    setFormPost({
      id:user.email,
      key:"workHistory",
      value:JSON.stringify(lists)
    });    buttonState(false)
  };

 useEffect(() => {
   if (organisation==""||title==""||hasValueStart==""||hasValueEnd=="") {
     
       setdisabled(true)
   }else{
    setdisabled(false) 
   }
   lists.length > 0 ? readyState() : buttonState(true);

 
 }, [hasValueStart,hasValueEnd,organisation,title,lists])
 
  
  return (
    <Container>
      <Typography color="blue" variant="caption" sx={{ display: "block"}}>
      Add in reverse chronological order, job title, organisation and dates
        </Typography>
      <Grid sx={{ display: "flex", gap: 2, flexWrap: "wrap",mt:5 }}>
        <TextField
         onChange={(e)=> setorganisation(e.target.value)}
         inputRef={textInput}
         value={organisation}
          id="organisation" 
          label="Organisation" 
          variant="outlined" />
        <TextField 
        onChange={(e)=> settitle(e.target.value)} 
        inputRef={textInput}
        value={title}
        id="Title" 
        label="Job Title" 
        variant="outlined"
         />
        <TextField
         onFocus={() => setFocusStart(true)}
         onBlur={() => setFocusStart(false)}
         value={hasValueStart}
         onChange={(e) => {
          if (e.target.value) setHasValueStart(e.target.value);
          else setHasValueStart(false);
        }}
      
        type={hasValueStart || focusStart ? "month" : "text"}
          label="Date Started"
          variant="outlined"
        />
        <TextField
         onFocus={() => setFocusEnd(true)}
         onBlur={() => setFocusEnd(false)}
         value={hasValueEnd}
         onChange={(e) => {
          if (e.target.value) setHasValueEnd(e.target.value);
          else setHasValueEnd(false);
        }}
        type={hasValueEnd || focusEnd ? "month" : "text"}
          label="Date Completed"
          variant="outlined"
        />
        <Fab size="small" color="secondary" onClick={add} disabled={disabled}  component="label" >
         <AddIcon />
          </Fab>
      </Grid>
      <Grid sx={{  mt:5,p:1.2, display: "flex", gap: 2, maxWidth:650, flexWrap: "wrap", alignItems:"center", background:color }}>
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
    </Container>
  );
}

export default WorkHistory;

 
   
 

