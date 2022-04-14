import { React, useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container, Button } from "@mui/material";
import TextArea from "./component/TextArea";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { StateContext } from "../../../context/state";

function PersonalInfo() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [surName, setsurName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [personalStatement, setpersonalStatement] = useState("");
  const { buttonState, setFormPost,formPost, user, } = useContext(StateContext);

  // let pdf = document.getElementById("file").value
  // let formData = new FormData();
  // formData.append("pdf", pdf);


  

  const readyState = () => {
    setFormPost({
      id:user.email,
      key:"personalInfo",
      value:JSON.stringify({
        firstName,
        lastName,
        surName,
        email,
        phone,
        address,
        personalStatement,
      })
    });
    buttonState(false)
  };

  useEffect(() => {
    console.log(
      firstName,
      lastName,
      surName,
      email,
      phone,
      address,
      personalStatement,
    )
    if (
      firstName == "" ||
      lastName == "" ||
      surName == "" ||
      email == "" ||
      phone == "" ||
      address == "" ||
      personalStatement == ""
    ) {
      buttonState(true);
      setFormPost(undefined);
    } else {
      readyState()
      
    }
  }, [firstName, lastName, surName, email, phone, gender, address, personalStatement]);

  return (
    <Container fixed>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography color="blue" variant="caption" sx={{ display: "block" }}>
          Bio data
        </Typography>
        <TextField
          onChange={(e) => setfirstName(e.target.value)}
          id="firstName"
          label="First Name"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setsurName(e.target.value)}
          id="surName"
          label="Surname"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setlastName(e.target.value)}
          id="lastName"
          label="Last Name"
          variant="outlined"
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", mt: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography color="blue" variant="caption" sx={{ display: "block", mt: 50 }}>
          Contact information
        </Typography>
        <TextField
          onChange={(e) => setemail(e.target.value)}
          type="email"
          id="Email"
          label="Email Address"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setphone(e.target.value)}
          type="number"
          id="Phone"
          label="Phone Number"
          variant="outlined"
        />
        <TextArea change={(e) => setaddress(e.target.value)} label={"Address"} />
      </Box>
      <Box
        component="form"
        sx={{ height: 30, "& > :not(style)": { m: 1, width: "25ch", mt: 1 } }}
        noValidate
        autoComplete="off"
      >
        <Typography color="blue" variant="caption" sx={{ display: "block", mt: 20 }}>
          Personal Statement
        </Typography>
        <TextArea
          label={"Personal Statement"}
          change={(e) => setpersonalStatement(e.target.value)}
          sx={{ height: 30 }}
        />
        <Button
          sx={{ maxWidth: 147, color: "white" }}
          color="primary"
          endIcon={<CloudUploadIcon />}
          component="label"
          variant="contained"
        >
          Upload CV
          <input id="file" type="file" hidden />
        </Button>
      </Box>
    </Container>
  );
}

// const Input = (props) => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.BoxInline} pr={1} pl={1} >
//       <Box className={classes.BoxText} pr={1}>
//         {props.label || props.labels} : {props.req && <span>*</span>}
//       </Box>
//       <Box>
//           <PhoneInput
//           specialLabel={''}
//           country={'th'}
//           inputStyle={{
//             borderColor: (props.touched && props.error) && "red"
//           }}
//           {...props}
//           />
//           {(props.touched && props.error) && <p style={{color:'red'}} className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error MuiFormHelperText-filled MuiFormHelperText-marginDense">{props.error}</p> }
//       </Box>
//     </Box>
//   );
// };

// const index = (props) => {
//   return (
//       <Input
//           label={"Mobile Phone"}
//           req={true}
//           helperText={""}
//           error={true}
//           isSelect={false}
//           {...props.input}
//           {...props.meta}
//           {...props.custom}
//       />
//   )
// }

export default PersonalInfo;
