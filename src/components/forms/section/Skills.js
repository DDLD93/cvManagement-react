import { Button, Container, Grid, Icon, TextField ,Typography  } from "@mui/material";
// date-fns
import uuid from 'react-uuid'
import SkillList from "./component/skillList";
import AddIcon from '@mui/icons-material/Add';
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../../../context/state";

import "./section.css";



function Skills() {
  const [skill, setskill] = React.useState("");
  const [lists, setlists] = React.useState([])
  const [disabled, setdisabled] = useState(true)
  const { buttonState } = useContext(StateContext);

  
  
const color = lists.length < 1?"":"lightBlue"
var key = uuid()
 const add = () => {
    let list ={
        id:key,
        skill,
       }
        
      setlists(prev =>[...prev,list])
      
      setskill("")
        
     }  
  const deleteEntry = (e)=>{
    let id = e.target.id
     setlists(lists.filter(item => item.id !== id));
  }
  const readyState = () => {
    setFormPost(JSON.stringify(lists));
    buttonState(false)
  };


 useEffect(() => {
   if (skill=="") {
       setdisabled(true)
   }else{
    setdisabled(false) 
   }
   lists.length > 0 ? readyState() : buttonState(true);

 }, [skill,lists])
 
  
  return (
    <Container>
      <Grid sx={{ p:1.2, display: "flex", gap: 2, flexWrap: "wrap", alignItems:"center", background:color }}>
        {lists.map((e)=>{
          return(
            <SkillList
            id={e.id}
            delete={deleteEntry}
            skill={e.skill}
            />
          )
        })}
      </Grid>
      <Typography color="blue" variant="caption" sx={{ display: "block"}}>
      Use this section to write about your computational skills, administrative skills, team-working
skills, time-management, communication skills and project management skills
        </Typography>
      <Grid sx={{ display: "flex", gap: 2, flexWrap: "wrap",mt:5 }}>
        <TextField onChange={(e)=> setskill(e.target.value)} id="organisation" label="Skill" variant="outlined" />
        <Button disabled={disabled} onClick={add} variant="contained"><AddIcon/></Button>
      </Grid>
    </Container>
  );
}

export default Skills;

 
   
 

