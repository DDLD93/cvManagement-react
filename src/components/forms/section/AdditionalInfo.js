import { Button, Container, Grid, Icon, TextareaAutosize, TextField } from "@mui/material";
// date-fns
import uuid from 'react-uuid'
import SkillList from "./component/skillList";
import "./section.css";
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../../../context/state";
import TextArea from "./component/TextArea";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import BasicSelect from "./component/Select";


function Info() {
  const [info, setinfo] = React.useState("");
  const [lists, setlists] = React.useState([])
  const [value, setvalue] = useState(false)
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
   console.log(value)
   console.log(info)
   if (info=="") {
     setdisabled(true)
    buttonState(true)
   }else{
    buttonState(false)
    setdisabled(false)

    readyState()
   
   }
 }, [info],value)
 
  
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
      <Grid container alignItems="center" sx={{ display: "flex", gap: 2, flexWrap: "wrap",mt:5 }}>
        <Grid xs={2} item >
      <BasicSelect
               
                label="Category"
                isDisabled={false}
                cValue={value}
                changes={(e) => setvalue(e.target.value)}
                list={[
                  { name: null, value: null },
                  { name: "RESEARCH", value: "RESEARCH" },
                  { name: "TEACHING", value: "TEACHING" },
                  { name: "PUBLICATIONS/PRESENTATIONS", value: "PUBLICATIONS" },
                  { name: "CONFERENCES/COURSES", value: "COURSES" },
                  { name: "FUNDING/ACADEMIC AWARDS", value: "FUNDING" },
                ]}
              />

        </Grid>
        <Grid xs={4} item >
        <TextArea  
        label={"Additional Information"}
        change={(e)=> setinfo(e.target.value)}
        maxRows={5}
        style={{width:100}}
        />
        </Grid>
        <Grid xs={1} item >
          <Fab size="small" color="blue" component="label" >
         <CloudUploadIcon />
         <input id="file" type="file" hidden />
          </Fab>
        </Grid>
        <Grid xs={1} item >
          <Fab size="small" color="secondary" aria-label="add" onClick={add} disabled={disabled}  component="label" >
         <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Info;

 
   
 

