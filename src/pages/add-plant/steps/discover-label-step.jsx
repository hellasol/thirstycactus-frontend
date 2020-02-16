import React, { useState, useEffect } from "react";
import api from "../../../api";

export function DiscoverLabelStep({ onSuccess, plant}) {
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    api.plants.discoverLabel(plant._id).then(setLabels);
  }, [plant._id]);
  
  async function handleClick(label) {
    const newPlant = await api.plants.update(plant._id, { label });
    onSuccess(newPlant);
  }
    return (
      <>
    {labels.map(label => <button key={label} onClick={ () => handleClick(label)}>{label}</button>)}
     </>
    )
  }