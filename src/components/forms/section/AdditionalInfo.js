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
import AddList from "./component/AddList";


function Info() {
  const [info, setinfo] = React.useState("");
  const [lists, setlists] = React.useState([])
  const [value, setvalue] = useState(undefined)
  const [disabled, setdisabled] = useState(true)
  const { buttonState,setFormPost,user } = useContext(StateContext);
  const [focusEnd, setFocusEnd] = useState(false);
  const [hasValueEnd, setHasValueEnd] = useState(undefined);


  
  
const color = lists.length < 1?"":"lightBlue"
var key = uuid()
 const add = () => {
    let list ={
        id:key,
        category:value,
        description:info,
        date:hasValueEnd
       }
        
      setlists(prev =>[...prev,list])
      setHasValueEnd(undefined)
      setinfo("")
        
     }  
  const deleteEntry = (e)=>{
    let id = e.target.id
     setlists(lists.filter(item => item.id !== id));
  
   
  }
  const readyState = () => {
    setFormPost({
      id:user.email,
      key:"additionalInfo",
      value:JSON.stringify(lists)
    });
    buttonState(false)
  };

 useEffect(() => {
  if (info==""||hasValueEnd==undefined||value==undefined) {
     
    setdisabled(true)
}else{
 setdisabled(false) 
}
lists.length > 0 ? readyState() : buttonState(true);
 }, [info,hasValueEnd,value])
 
  
  return (
    <Container>
      <Grid container alignItems="center" sx={{ display: "flex", gap: 2, flexWrap: "wrap",mt:5 }}>
        <Grid xs={2} item >
      <BasicSelect
               
                label="Category"
                isDisabled={false}
                cValue={value}
                changes={(e) => setvalue(e.target.value)}
                list={[
                  { name: null, value: null },
                  { fullName: "RESEARCH", value: "RESEARCH" },
                  { fullName: "TEACHING", value: "TEACHING" },
                  { fullName: "PUBLICATIONS/PRESENTATIONS", value: "PUBLICATIONS" },
                  { fullName: "CONFERENCES/COURSES", value: "COURSES" },
                  { fullName: "FUNDING/ACADEMIC AWARDS", value: "FUNDING" },
                ]}
              />

        </Grid>
        <Grid xs={4} item >
        <TextArea  
        label={"Additional Information"} 
        value={info}
        change={(e)=> setinfo(e.target.value)}
        maxRows={5}
        style={{width:100}}
        />
        </Grid>
        <Grid>
        <TextField
         onFocus={() => setFocusEnd(true)}
         onBlur={() => setFocusEnd(false)}
         value={hasValueEnd}
         onChange={(e) => {
          if (e.target.value) setHasValueEnd(e.target.value);
          else setHasValueEnd(false);
        }}
        type={hasValueEnd || focusEnd ? "month" : "text"}
          label="Date"
          variant="outlined"
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
        <Grid sx={{ p:1.2, display: "flex", gap: 2, flexWrap: "wrap", alignItems:"center", background:color }}>
        {lists.map((e)=>{
          return(
            <AddList
            id={e.id}
            delete={deleteEntry}
            category={e.category}
            description={e.description}
            date={e.date}
            />
          )
        })}
      </Grid>
      </Grid>
    </Container>
  );
}

export default Info;

 
   
 

