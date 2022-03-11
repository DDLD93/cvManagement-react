import { Button, Container, Grid, Icon, TextField } from "@mui/material";
// date-fns
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../../../context/state";
import uuid from 'react-uuid'
import RenderList from "./component/Lists"
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';

import "./section.css";



function Membership() {
  const [date, setDate] = React.useState("");
  const [organisation, setOrganisation] = React.useState("")
  const [title, setTitle] = React.useState("")
  const [lists, setlists] = React.useState([])
  const [disabled, setdisabled] = useState(true)
  const [focusStart, setFocusStart] = useState(false);
  const [hasValueStart, setHasValueStart] = useState(false);

  const { disable, loading, buttonState } = useContext(StateContext);
  
const color = lists.length < 1?"":"lightBlue"
var key = uuid()
 const add = () => {
    let list ={
        id:key,
        organisation,
        title,
        date:hasValueStart
       }
        
      setlists(prev =>[...prev,list])
      setOrganisation("")
      setTitle("")
      setDate("")
     
     }  
  const deleteEntry = (e)=>{
    console.log(e.target)
    let id = e.target.id
     setlists(lists.filter(item => item.id !== id));
  
   
  }


 useEffect(() => {
   if (hasValueStart==""||organisation==""||title=="") {
     
       setdisabled(true)
   }else{
    setdisabled(false) 
   }
   lists.length > 0 ? buttonState(false) : buttonState(true);
 }, [organisation,title,hasValueStart,lists])
 
  
  return (
    <Container>
      <Grid sx={{ p:1.2, display: "flex", gap: 2, maxWidth:650, flexWrap: "wrap", alignItems:"center", background:color }}>
         {lists.map((e)=>{
          return(
            <RenderList
            id={e.id}
            delete={deleteEntry}
            orgnisation={e.organisation}
            title={e.title}
            date={e.date}

            />
          )
        })}
      </Grid>
      <Typography color="blue" variant="caption" sx={{ display: "block"}}>
      List any memberships you may have relevant to your research or other life activities
        </Typography>
      <Grid sx={{ display: "flex", gap: 2, flexWrap: "wrap",mt:5 }}>
        <TextField onChange={(e)=> setOrganisation(e.target.value)} id="Institution" label="Organisation" variant="outlined" />
        <TextField onChange={(e)=> setTitle(e.target.value)} id="Qualification" label="Title" variant="outlined" />
        <TextField
         onFocus={() => setFocusStart(true)}
         onBlur={() => setFocusStart(false)}
         
         onChange={(e) => {
          if (e.target.value) setHasValueStart(e.target.value);
          else setHasValueStart(false);
        }}
        label="Date"
        type={hasValueStart || focusStart ? "date" : "text"}
          label="Date Started"
          variant="outlined"
        />
        <Button disabled={disabled} onClick={add} variant="contained"><AddIcon/></Button>
      </Grid>
    </Container>
  );
}

export default Membership;

 
   
 

