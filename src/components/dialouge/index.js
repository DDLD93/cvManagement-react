import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Icon } from "@mui/material";
import { StateContext } from "../../context/state";
import { LoadingButton } from "@mui/lab";
import { PDFrender } from "components/PDF";

export function AlertDialog(prop) {
  const [open, setOpen] = React.useState(false);
  const [loading, setloading] = useState(false);
  const { notification } = useContext(StateContext);

  const action = () => {
    setloading(true);
    fetch(`http://localhost:5000/${prop.icon == "delete" ? "delete" : "suspend"}/${prop.id}`)
      .then((res) => res.json())
      .then((res) => {
        res.status == "Success"
          ? notification("success", res.message)
          : notification("error", res.message);
          console.log(res)
        setOpen(false);
        setloading(false);
      })
      .catch((err) => {
        notification("error", err.message);
        console.log(err)
        setloading(false);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Icon sx={{ cursor: "pointer" }} onClick={handleClickOpen}>
        {prop.icon}
      </Icon>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{prop.text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton
            onClick={action}
            autoFocus
            loading={loading}
            loadingPosition="end"
            variant="text"
          >
            Confirm
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export function ScrollDialog(prop) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [loading, setloading] = useState(false);
  const [education, seteducation] = useState([]);
  const [work, setwork] = useState([]);
  const [memberShip, setmemberShip] = useState([]);
  const [skills, setskills] = useState([]);
  const [persoanlInfo, setpersoanlInfo] = useState([])

  var [form, setForm] = useState([]);
  const { user, notification } = useContext(StateContext);
  const reviewForm = () => {
    setloading(true);
    fetch(`http://localhost:5000/forms/modify`, {
      method: "POST",
      body: JSON.stringify({
        key: "viewedBy",
        value: user.id,
        id: prop.email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        data.status == "success"
          ? notification("success", data.message)
          : notification("error", data.message);
          console.log(data)
        setloading(false);
        setOpen(false)
      })
      .catch((err) => {
        notification("error", err.message);
        console.log(err)
        setloading(false);
      });
  };
  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    fetch(`http://localhost:5000/forms/${prop.email}`)
      .then((res) => res.json())
      .then((data) => {
        const userForm = [];
        userForm.push(data.payload);
        setForm(userForm);
        seteducation(JSON.parse(userForm[0].education));
        setwork(JSON.parse(userForm[0].workHistory));
        setmemberShip(JSON.parse(userForm[0].membershipHistory));
        setskills(JSON.parse(userForm[0].skills));
        setpersoanlInfo(JSON.parse(userForm[0].personalInfo))
      })
      .catch((err) => {
       // notification("error", err.message);
      });
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Icon sx={{ cursor: "pointer" }} onClick={handleClickOpen("body")}>
        visibility
      </Icon>
      <Dialog open={open} onClose={handleClose} scroll={scroll} maxWidth="md">
        <DialogTitle id="scroll-dialog-title">CV Data</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText p={3} ref={descriptionElementRef} tabIndex={-1}>
            <h4 style={{ marginBottom: 15 }}>Personal Information</h4>
           {PersonalInfoRender(persoanlInfo)}
            <h4 style={{ marginTop: 35 }}>Education History</h4>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                {education.map((e) => (
                  <EducationHistory
                    institute={e.institute}
                    qualification={e.qualification}
                    started={e.date}
                    ended={"2015-11"}
                  />
                ))}
              </Grid>
            </Grid>
            <h4 style={{ marginTop: 35 }}>Work History</h4>
            <Grid container spacing={4}>
              <Grid item xs={12}>
              {work.map((e) => (
                  <WorkHistory
                  orgnisation={e.organisation}
                  title={e.title}
                  started={e.date}
                  ended={"2015-11"}
                  />
                ))}
              </Grid>
            </Grid>
            <h4 style={{ marginTop: 35 }}>MemberShip</h4>
            <Grid container spacing={4}>
              <Grid item xs={12}>
              {memberShip.map((e) => (
                  <Membership
                  orgnisation={e.organisation}
                  title={e.title}
                  started={e.date}
                  ended={"2015-11"}
                  />
                ))}
              </Grid>
            </Grid>
            <h4 style={{ marginTop: 35 }}>Skills</h4>
            <Grid container spacing={1} flexDirection="row">
            {skills.map((e) => (
                  <Skills
                  skill={e.skill}
                  />
                ))}
            </Grid>
            <div>
              <h3 style={{ margin: 20, textAlign: "center", color: "black" }}>CV Preview</h3>
              <hr />
              <PDFrender />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            sx={{ color: "red" }}
            autoFocus
            loading={loading}
            loadingPosition="end"
            variant="text"
          >
            Reject
          </LoadingButton>

          <LoadingButton
            onClick={reviewForm}
            autoFocus
            loading={loading}
            loadingPosition="end"
            variant="text"
          >
            Approve
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Field = (prop) => {
  return (
    <>
      <span style={{ fontSize: "12px", color: "blue", display: "block" }}>{prop.title}</span>
      <span style={{ margin: 0, padding: 0 }}>{prop.field}</span>
    </>
  );
};
const PersonalInfoRender = ({firstName,lastName,surName,email,phone,address,personalStatement}) => {
    return (
        <Grid container spacing={4}>
          {/* <Grid item xs={2} >
                    <Field
                    title={"Title"}
                    field={"Dr"}
                    />
              </Grid> */}
          <Grid item xs={12}>
            <Field
              title={"Summary"}
              field={personalStatement}
            />
          </Grid>
          <Grid item xs={3}>
            
              <Field title={"Full Name"} field={firstName+" "+lastName+" "+surName} />
        
          </Grid>
          <Grid item xs={2}>
            <Field title={"Gender"} field={"Not found"} />
          </Grid>
          <Grid item xs={3}>  
              <Field title={"Email"} field={email} />
          </Grid>
          <Grid item xs={3}>
            <Field title={"Phone"} field={phone} />
          </Grid>
          <Grid item xs={12}>
            <Field title={"Address"} field={address} />
          </Grid>
        </Grid>
        
    );
  };
const EducationHistory = (prop) => {
  return (
    <>
      <div style={{ display: "flex", gap: 30, marginTop: 5 }}>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Institute</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.institute}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Qualification</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.qualification}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Started</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.started}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Ended</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.ended}</span>
        </div>
      </div>
      <hr />
    </>
  );
};
const WorkHistory = (prop) => {
  return (
    <>
      <div style={{ display: "flex", gap: 30, marginTop: 5 }}>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Organization</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.orgnisation}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Title</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.title}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Started</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.started}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Ended</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.ended}</span>
        </div>
      </div>
      <hr />
    </>
  );
};
const Membership = (prop) => {
  return (
    <>
      <div style={{ display: "flex", gap: 30, marginTop: 5 }}>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Organization</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.orgnisation}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Title</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.title}</span>
        </div>
        <div>
          <span style={{ fontSize: "12px", color: "blue", display: "block" }}>Started</span>
          <span style={{ margin: 0, padding: 0 }}>{prop.started}</span>
        </div>
      </div>
      <hr />
    </>
  );
};

const Skills = (prop) => {
  return (
    <div>
      <span style={{ fontSize: "25px", display: "inline" }}>.</span>
      <span style={{ margin: 0, padding: 0 }}>{prop.skill}</span>
    </div>
  );
};
