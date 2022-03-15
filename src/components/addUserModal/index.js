import React,{useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import { Checkbox, Grid, TextField } from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import BasicSelect from "components/forms/section/component/Select";
import SelectMenu from "components/forms/section/component/Select";
import SelectDropdown from "components/forms/section/component/Select";

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
    borderRadius:"7px",
    boxShadow: 24,
    p: 4,
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
    right: "3%",
    buttom: "0%",
    position: "fixed",
    zIndex: 10,
  },
  add: {
    top: 30,
    height: 40,
    width: 40,
    borderRadius: "50%",
  },
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [focusStart, setFocusStart] = useState(false);
  const [hasValueStart, setHasValueStart] = useState(false);

async function postData(data) {
  
  console.log(JSON.stringify(data) )
  const response = await fetch("http://localhost:5000/create", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  return response.json()
}

  const addUser = (event) => {
    event.preventDefault();
    let data = new FormData(event.currentTarget);
  data =  {
      email: data.get('email'),
      phone: data.get('phone'),
      fullName: data.get('fullName'),
      userRole: data.get('role'),
      manager: data.get('manager'),
    } 
    postData(data).then(res=>console.log(res)).catch(err=>console.log(err))
  }

  return (
    <div style={style.button}>
      <PersonAddAlt1Icon sx={style.add} variant="contained" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal} component="form" onSubmit={addUser} noValidate autoComplete="off">
            <MDTypography variant="h4" sx={{mb:5}}>
            Create User
            </MDTypography>
          <Grid justifyContent="center" container spacing={2}>
          <Grid item xs={3}>
                <SelectDropdown/>
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
            <Grid item xs={6}>
              <TextField fullWidth name="role" variant="outlined" label="User Role" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth name="manager" variant="outlined" label="Staff Manager" />
            </Grid>
            <Grid container justifyContent="space-around" item xs={12}>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox name="sms"/>
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
              <Checkbox  disabled />
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
              <MDButton 
              variant="gradient" 
              type="submit"
              color="info" 
              fullWidth
              >
                Add User
              </MDButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
