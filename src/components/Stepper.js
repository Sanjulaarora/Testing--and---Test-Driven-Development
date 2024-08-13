import React from 'react';
import { useState } from 'react';

const Stepper = ({StepsConfig = []}) => {
 const[currentStep, setCurrentStep] = useState(1);
 const[isComplete, setIsComplete] = useState(false);

 if(!StepsConfig.length){
  return <></>;
 }

 const ActiveComponent = StepsConfig[currentStep - 1]?.Component;

 const handleNext = () => {
    setCurrentStep(prevStep => {
      if (prevStep === StepsConfig.length) {
        setIsComplete(true)
        return prevStep;
      } else {
        return prevStep+1;
      }
    })
 };

  return (
    <>
      <div className="stepper">
        {StepsConfig.map((step, index) => {
          return (
            <div key={step.name} className= {`step ${currentStep > index + 1 || isComplete ? "complete" : ""} ${currentStep === index + 1 ? "active" : ""} `}>
              <div className="step-number">{ currentStep > index + 1 || isComplete ? ( <span>&#10003;</span> ) : ( index+1 ) }</div>
              <div className="step-name">{step.name}</div>
            </div>
          )
        })}
      </div>
      <ActiveComponent/>
      <button className="btn" onClick={handleNext}> {currentStep === StepsConfig.length ? "Finish" : "Next"}</button>
    </>
  )
}

export default Stepper;