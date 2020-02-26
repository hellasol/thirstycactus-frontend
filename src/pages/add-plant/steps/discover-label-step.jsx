import React, { useState, useEffect } from "react";
import api from "../../../api";
import {SpinnerAnimation} from "../../../components/spinner"

export function DiscoverLabelStep({ onSuccess, plant}) {
  const [labels, setLabels] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true)
    api.plants.discoverLabel(plant._id).then(setLabels).finally(() => setPending(false));
  }, [plant._id]);
  if(pending) {
    return <SpinnerAnimation />
  }
  
  async function handleClick(label) {
    const newPlant = await api.plants.update(plant._id, { label });
    onSuccess(newPlant);
  }
    return (
      <>
      <br/>
      <h2>Choose the most descriptive label</h2>
      <br/>
    {labels.map(label => <button key={label} onClick={ () => handleClick(label)}>{label}</button>)}
     </>
    )
  }