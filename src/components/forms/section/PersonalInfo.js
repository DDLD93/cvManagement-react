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
import TextArea from "./component/TextArea";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function PersonalInfo() {
  const gender = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    }
  ]

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
        <TextField id="surName" label="Surname" variant="outlined" />
        <TextField id="lastName" label="Last Name" variant="outlined" />
        <Box sx={{width:100 }}>
        <TextField
          id="outlined-select-currency"
          variant="outlined"
          select
          label="Gender"
          value={gender}
          onChange={handleChange}
          helperText="Select your gender"
        >
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
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
        <Typography color="blue" variant="caption" sx={{ display: "block", mt: 50 }}>
          Contact information
        </Typography>
        <TextField type='email' id="Email" label="Email Address" variant="outlined" />
        <TextField type='number' id="Phone" label="Phone Number" variant="outlined" />
        <TextArea
        label={"Address"}
        />
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
        <TextArea
        label={"Personal Statement"}
        sx={{height:30}} />
        <Button
        sx={{maxWidth:147,color:"blue"}}
        color="secondary"
      endIcon={<CloudUploadIcon/>}  variant="outlined"
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


