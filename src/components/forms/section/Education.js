import { Button, Container, Grid, Icon, TextField, Typography } from "@mui/material";
// date-fns
import uuid from "react-uuid";
import RenderList from "./component/Lists";
import RenderListThree from "./component/ListThree";
import AddIcon from "@mui/icons-material/Add";
import "./section.css";
import AddButton from "./component/AddButton";
import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../../../context/state";

function Education() {
  const [qualf, setqualf] = React.useState("");
  const [inst, setinst] = React.useState("");
  const [lists, setlists] = React.useState([]);
  const [disabled, setdisabled] = useState(true);
  const [focusStart, setFocusStart] = useState(false);
  const [hasValueStart, setHasValueStart] = useState(false);
  const [focusEnd, setFocusEnd] = useState(false);
  const [hasValueEnd, setHasValueEnd] = useState(false);

  const { disable, loading, buttonState,setFormPost,user} = useContext(StateContext);

  const color = lists.length < 1 ? "" : "lightBlue";
  var key = uuid();
  const add = () => {
    let list = {
      id: key,
      institute: inst,
      qualification: qualf,
      date: hasValueStart,
      dateTwo: hasValueEnd,
    };

    setlists((prev) => [...prev, list]);
    setinst("");
    setqualf("");
  };
  const deleteEntry = (e) => {
    console.log(lists.length);
    let id = e.target.id;
    setlists(lists.filter((item) => item.id !== id));
  }
    const readyState = () => {
      setFormPost({
        id:user.email,
        key:"education",
        value:JSON.stringify(lists)
      });
      buttonState(false)
    };


  useEffect(() => {
    if (qualf == "" || inst == "" || hasValueStart == "" || hasValueEnd == "") {
      setdisabled(true);
    } else {
      setdisabled(false);
    }
    lists.length > 0 ? readyState() : buttonState(true);
  }, [hasValueStart, hasValueEnd, qualf, inst, lists]);

  return (
    <Container>
      <Grid
        sx={{
          p: 1.2,
          display: "flex",
          gap: 2,
          maxWidth: 650,
          flexWrap: "wrap",
          alignItems: "center",
          background: color,
        }}
      >
        {lists.map((e) => {
          return (
            <RenderListThree
              id={e.id}
              delete={deleteEntry}
              institution={e.institute}
              qualification={e.qualification}
              date={e.date}
              dateTwo={e.dateTwo}
            />
          );
        })}
      </Grid>
      <Typography color="blue" variant="caption" sx={{ display: "block" }}>
        In reverse chronological order, add the institutions where you studied, when you studied and
        outcomes.
      </Typography>
      <Grid sx={{ display: "flex", gap: 2, flexWrap: "wrap", mt: 5 }}>
        <TextField
          onChange={(e) => setinst(e.target.value)}
          id="Institution"
          label="Institution"
          variant="outlined"
        />
        <TextField
          value={qualf}
          onChange={(e) => setqualf(e.target.value)}
          id="Qualification"
          label="Qualification"
          variant="outlined"
        />
        <TextField
          onFocus={() => setFocusStart(true)}
          onBlur={() => setFocusStart(false)}
          onChange={(e) => {
            if (e.target.value) setHasValueStart(e.target.value);
            else setHasValueStart(false);
          }}
          type={hasValueStart || focusStart ? "date" : "text"}
          label="Date Started"
          variant="outlined"
        />
        <TextField
          onFocus={() => setFocusEnd(true)}
          onBlur={() => setFocusEnd(false)}
          onChange={(e) => {
            if (e.target.value) setHasValueEnd(e.target.value);
            else setHasValueEnd(false);
          }}
          type={hasValueEnd || focusEnd ? "date" : "text"}
          label="Date Completed"
          variant="outlined"
        />
        {/* <AddButton
        disabled={disabled} onClick={add}
        /> */}
        <Button disabled={disabled} onClick={add} variant="contained">
          <AddIcon />
        </Button>
      </Grid>
    </Container>
  );
}

export default Education;
