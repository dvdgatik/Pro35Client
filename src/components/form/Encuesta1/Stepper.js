import React, {useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Categoria1 from './Categoria1';
import Categoria2 from './Categoria2';
import Categoria3 from './Categoria3';
import Categoria4 from './Categoria4';
import Typography from '@material-ui/core/Typography';
import { useAuth0 } from "../../../react-auth0-spa";
import ReactDOM from 'react-dom';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  return ['Ambiente de trabajo', 'Factores propios de la actividad', 'Organización del tiempo de trabajo','Liderazgo y relaciones en el trabajo'];
}



function GetStepContent(props, formRef) {
   switch (props.activeStep) {
    
    case 0:
      return(
          <Categoria1/>
      );
      
    case 1:
      return(
          <Categoria2/>
      );
    case 2:
      return (
          <Categoria3/>
      )
    case 3: 
        return (
            <Categoria4/>
        )
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {

  let formRef = React.createRef();

 const { user } = useAuth0();
  const idUser = JSON.stringify(user.sub).replace('"auth0|','').replace('"','')
  const [respuestasC , setRespuestas] = React.useState('');
  const [idGuia, setIdGuia] = React.useState('Guia2');
  const [idEmpleado, setEmpleado] = React.useState(idUser);
  const [idPeriodo, setPeriodo] = React.useState('5e28d918eed21a15e06b3dec')

  const submit = e => {
   
    let respuestasC = JSON.parse(localStorage.getItem('respuestas'))
    e.preventDefault()   
     fetch('http://192.168.1.69:3000/api/encuestaC/guardar', {
      method: 'POST',
      body: JSON.stringify({      
        idEmpleado,
        idGuia,
        idPeriodo,
        respuestasC,
      }),
      headers: {
				'Accept': 'application/json',
				'content-type':'application/json'
			}
    }).then(localStorage.clear())
    .catch(err => console.log(err))
  }

  console.log(submit)

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [checkDisabledNext, setCheckDisabledNext] = React.useState(false)
  const [disabledNext, setDisableNext] = React.useState(false);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <form className={classes.form} onSubmit={submit} noValidate>
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>Encuesta Terminada</Typography>
            <Button onClick={handleReset}>Reset</Button>
            {window.location.href = "/home"}
          </div>
        ) : (
          <div>
            <GetStepContent activeStep={activeStep} />
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Atras
              </Button>
              {/*<Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'} 
                
        </Button>*/}
              {
                activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary" type="submit" onClick={handleNext} className={classes.submit}>
                    Terminar
                </Button>
                
                ) : (
                <Button className="btn-sig" variant="contained" color="primary" onClick={handleNext} >
                    Siguiente
                </Button>
              )
              }
              {/*<button  className={classes.submit} type="submit">Guardar</button>*/}
            </div>
          </div>
        )}
      </div>
    </div>
    </form>
  );
}
