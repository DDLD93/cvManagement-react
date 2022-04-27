import React, { useState,useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Checkbox, FormControl, Grid, RadioGroup, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import BasicSelect from "components/forms/section/component/Select";
import { StateContext } from "../../context/state"
import { SignalCellularNull } from "@mui/icons-material";
const style = {
  modal: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "0px solid #red",
    borderRadius: "7px",
    boxShadow: 24,
    p: 4,
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 10,
  },
  add: {
    height: 40,
    width: 40,
    borderRadius: "50%",
  },
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [role, setrole] = useState("staff")
  const [title, settitle] = useState("none");
  const [manager, setmanager] = useState(null);
  const [managerList, setmanagerList] = useState([])
  const {notification,loadingState} = useContext(StateContext);

  async function postData(data) {
    console.log(JSON.stringify(data));
    const response = await fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
async function getUserAdmin () {
  try {
    const response = await fetch(`http://localhost:5000/getusers/userRole/staffAdmin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    return error
  }
}
  const addUser = (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
    data = {
      email: data.get("email"),
      phone: data.get("phone"),
      fullName: `${title=="none"?"":title} ${data.get("fullName")}`,
      userRole: role,
      manager,
      sms: false,
    };
    loadingState(true)
    postData(data)
      .then((response) => {
        if (response.status == "Success") {
          notification("success",response.message)
          loadingState(false)
          handleClose()
          return 
        }
        loadingState(false)
         notification("error",response.message);
    })
      .catch((err) => {
        notification("error",err.message)
        loadingState(false)
      });
  };

  useEffect(() => {
    getUserAdmin().
    then(r => setmanagerList(r.payload)).
    catch(err => notification("error",err.message))
  }, [open])
  

  return (
    <div style={style.button}>
      <MDButton onClick={handleOpen} color="primary">
        Add User
      </MDButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal} component="form" onSubmit={addUser} noValidate autoComplete="off">
          <MDTypography variant="h4" sx={{ mb: 5 }}>
            Create User
          </MDTypography>
          <Grid justifyContent="center" container spacing={2}>
            <Grid item xs={3}>
              <BasicSelect
                label="Title"
                value={title}
                changes={(e) => {settitle(e.target.value);console.log(e.target.value)}}
                list={[
                  { fullName: "none", value: "none" },
                  { fullName: "Professor", email: "professor"},
                  { fullName: "Dr", email: "Dr" },
                ]}
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                type="name"
                name="fullName"
                label="Full Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                name="email"
                label="Email Address"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                id="Phone"
                name="phone"
                label="Phone Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
            <BasicSelect
                label="Account Type"
                value={role}
                changes={(e) => setrole(e.target.value)}
                list={[
                  { fullName: "Staff", email: "staff" },
                  { fullName: "Staff Admin", email: "staffAdmin" },
                ]}
              />
            </Grid>
            <Grid item xs={8}>
              <BasicSelect
                label="Staff Manager"
                isDisabled={role=="staff"?false:true}
                value={manager}
                changes={(e) => setmanager(e.target.value)}
                list={managerList}
              />
            </Grid>
            <Grid container justifyContent="space-around" item xs={12}>
              <MDBox display="flex" alignItems="center" ml={-1}>
                <Checkbox />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;Send SMS
                </MDTypography>
              </MDBox>
              <MDBox display="flex" alignItems="center" ml={-1}>
                <Checkbox checked={true} />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;Send Email
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} mt={4} mb={1}>
              <MDButton variant="gradient" type="submit" color="info" fullWidth>
                Create User
              </MDButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
