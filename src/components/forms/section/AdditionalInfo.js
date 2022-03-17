import { Button, Container, Grid, Icon, TextareaAutosize, TextField } from "@mui/material";
// date-fns
import uuid from 'react-uuid'
import SkillList from "./component/skillList";
import "./section.css";
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../../../context/state";
import TextArea from "./component/TextArea";


function Info() {
  const [info, setinfo] = React.useState("");
  const [lists, setlists] = React.useState([])
  const [disabled, setdisabled] = useState(true)
  const { buttonState,setFormPost,user } = useContext(StateContext);

  
  
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
  const readyState = () => {
    setFormPost({
      id:user.email,
      key:"additionalInfo",
      value:info
    });
    buttonState(false)
  };

 useEffect(() => {
   console.log(info)
   if (info=="") {
     
    buttonState(true)
   }else{
    buttonState(false)
    readyState()
   
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
        {/* <TextField sx={{idth:900}} onChange={(e)=> setinfo(e.target.value)} id="organisation" label="Additional Information" variant="outlined" /> */}
        <TextArea
        label={"Additional Information"}
        change={(e)=> setinfo(e.target.value)}
        maxRows={5}
        style={{width:1000}}

        />
      </Grid>
    </Container>
  );
}

export default Info;

 
   
 

