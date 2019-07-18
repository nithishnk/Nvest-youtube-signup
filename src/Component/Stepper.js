import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PopOver from '../Component/PopOver'
import SignUp from '../Component/SignUp'
import Video from '../Component/Video'
import '../Component/Stepper.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select', 'Create', 'Complete'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Video/>;
    case 1:
      return <SignUp/>;
    case 2:
      return '';
    default:
      return '';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
    <div className="btn-clr">
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
            <div className="pos-btn-left">
              <Button  
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
              <i class="sze fa fa-chevron-left" aria-hidden="true"></i>
              </Button>
              </div>
              <div>
              <Button className="pos-btn-right" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : <i class="sze fa fa-chevron-right" aria-hidden="true"></i>}
              </Button>
            </div>
            </div>
          </div>
        )}
      </div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
    </div>
  );
}
