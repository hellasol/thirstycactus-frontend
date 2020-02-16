import React, { useState } from "react";
import { DiscoverLabelStep } from "./steps/discover-label-step";
import { PlantFormStep } from "./steps/plant-form-step";
import { TrefleStep } from "./steps/trefle-step";
import { SuccessStep } from "./steps/success-step";

const plantFormStep = "plant form step"
const discoverLabelStep = "discover label step"
const trefleStep = "trefle step"
const successStep = "success step"

export function AddPlant() {
  const [step, setStep] = useState(plantFormStep);
  const [plant, setPlant] = useState(null);
  
  if (step === plantFormStep) {
    function handleSuccess(createdPlant) {
      setPlant(createdPlant);
      setStep(discoverLabelStep);
    }
    return <PlantFormStep onSuccess={handleSuccess}/>;
  }

  if (step === discoverLabelStep) {
    function handleSuccess(plantWithLabel) {
      setPlant(plantWithLabel);
      setStep(trefleStep);
    }
    return <DiscoverLabelStep onSuccess={handleSuccess} plant={plant}/>;
  }

  if (step === trefleStep) {
    function handleSuccess(plantWithTrefleId) {
      setPlant(plantWithTrefleId)
      setStep(successStep)
    }
    return <TrefleStep onSuccess={handleSuccess} plant={plant}/>;
  }

  if (step === successStep) {
   
    return <SuccessStep plant={plant}/>;
  }



    return (
     <p>master</p>
    )
  }