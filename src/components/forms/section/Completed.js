import { Button, Grid, Paper, Typography } from '@mui/material';
import MDBox from 'components/MDBox';

import React,{useContext} from 'react'
import { StateContext } from "../../../context/state";

function Completed() {
    const {user} = useContext(StateContext);

  return (
    <Grid sx={{height:"60vh"}} flexDirection="column" justifyContent="center" alignItems="center" container >
      <MDBox
          variant="gradient"
          bgColor="white"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={5}
          mb={1}
          textAlign="center"
        >    
      {user.reviewedBy!=""?(
      <>
      <Typography>Submission Aprroved</Typography>
      <Button sx={{mt:1}} >Update Document</Button>
      </>
      ):
      <Typography>Submission awaiting approval</Typography>
      }
      </MDBox>
      
    </Grid>
  )
}

export default Completed