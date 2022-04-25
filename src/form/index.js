import React from 'react'
import {Box, Stepper, Typography, Step, StepLabel, Container, Paper, Button} from '@mui/material'
import PersonalInformation from './components/PersonalInformation';
import EducationalBackgrounds from './components/EducationalBackgrounds';
import CivilService from './components/CivilService';


const steps = ['Personal Information', 'Educational Background', 'Civil Service Eligibility', 'Work Experience', 'Trainings and Programs',];

function PersonalDataSheet() {

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

  return (
    <Container>
        <Box sx={{ width: '100%', marginTop: 5 }} component={Paper} p={2}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button onClick={handleReset}>Reset</Button>
                </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {activeStep === 0 && (
                        <PersonalInformation activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} steps={steps} />
                    )}
                    {activeStep === 1 && (
                        <EducationalBackgrounds activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} steps={steps} />
                    )}
                    {activeStep === 2 && (
                        <CivilService activeStep={activeStep} handleBack={handleBack} handleNext={handleNext} steps={steps} />
                    )}
                </React.Fragment>
            )}
        </Box>
    </Container>
  )
}

export const ButtonsComponent = ({activeStep, handleBack, handleNext, steps}) => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
            >
            Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </Box>
    )
}

export default PersonalDataSheet