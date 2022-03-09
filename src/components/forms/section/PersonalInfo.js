import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Container,Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function PersonalInfo() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
        <TextField id="firstName" label="First Name" variant="outlined" />
        <TextField id="surName" label="SurName" variant="outlined" />
        <TextField id="lastName" label="Last Name" variant="outlined" />
        <Box sx={{width:100 }}>
        <InputLabel>Gender</InputLabel>
        <Select
          value={"age"}
          onChange={handleChange}
          sx={{width:100,height:35 }}
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          
        </Select>
    </Box>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", mt:1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography color="blue" variant="caption" sx={{ display: "block", mt: 20 }}>
          Contact information
        </Typography>
        <TextField type='email' id="Email" label="Email Address" variant="outlined" />
        <TextField type='number' id="Phone" label="Phone Number" variant="outlined" />
        <TextField label="Address" id="address" size="Normal" />
      </Box>
      <Box
        component="form"
        sx={{height:30,
          "& > :not(style)": { m: 1, width: "25ch", mt:1,  },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography color="blue" variant="caption" sx={{ display: "block", mt: 20 }}>
          Personal Statement
        </Typography>
        <TextField sx={{height:30}} label="Personal Statement" id="statement"/>
        <Button
        sx={{color:"blue",
      maxWidth:150}}
  variant="outlined"
  component="label"
>
  Upload File
  <input
    type="file"
    hidden
  />
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


