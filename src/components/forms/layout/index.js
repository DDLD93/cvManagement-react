import React, { useContext,useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersanalInfo from '../section/PersonalInfo';
import Education from '../section/Education';
import WorkHistory from '../section/WorkHistory';
import Membership from '../section/Membership';
import Skills from '../section/Skills';
import LoadingButton from '@mui/lab/LoadingButton';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Info from '../section/AdditionalInfo';
import {StateContext} from "../../../context/state";

const steps = ['Personal Info','Education', 'Work History','Professioal Membership','Skills','Referees','Additional Information'];

export default function StepperHorizotal() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStepTitle, setActiveStepTitle] = React.useState("Personal Info");
  const [completed, setCompleted] = React.useState({});
  const {disable,loading} = useContext(StateContext)

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step,ssss) => () => {
    setActiveStep(step);
    setActiveStepTitle(ssss)
    console.log(activeStepTitle)
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
    activeStep == 0 &&  setActiveStepTitle(prev => prev = "Education")
    activeStep == 1 &&  setActiveStepTitle(prev => prev = "Work History")
    activeStep == 2 &&  setActiveStepTitle(prev => prev = "Professioal Membership")
    activeStep == 3 &&  setActiveStepTitle(prev => prev = "Skills")
    activeStep == 4 &&  setActiveStepTitle(prev => prev = "Additional Information")
    
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index,label)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button variant='contained' onClick={handleReset}>Submit</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                <h3 style={{marginTop:"10px"}} >{activeStepTitle}</h3>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2,minHeight:300 }}>
                {activeStepTitle == 'Personal Info' && <PersanalInfo/>}
                {activeStepTitle == 'Education' && <Education/>}
                {activeStepTitle == 'Work History' && <WorkHistory/>}
                {activeStepTitle == 'Professioal Membership' && <Membership/>}
                {activeStepTitle == 'Skills' && <Skills/>}
                {activeStepTitle == 'Additional Information' && <Info/>}

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt:7,pb:7,pr:7 }}>
              {/* <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button> */}
              <Box sx={{ flex: '1 1 auto' }} />
              {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                Save
              </Button> */}
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {} already completed
                  </Typography>
                ) : (
                  <LoadingButton
                  variant='contained'
                  loading={loading}
                  disabled={disable}
                  endIcon={<NavigateNextIcon />}
                  loadingPosition="end"
                   onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Preview'
                      : 'Continue'}
                  </LoadingButton>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}