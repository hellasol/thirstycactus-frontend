import React, { useState } from "react";
import api from "../../../api";
import { FormGroup, Button, Input } from "reactstrap";
import Resizer from 'react-image-file-resizer';


export function PlantFormStep({ onSuccess }) {
  const [image, setImage] = useState(null); 

  async function handleSubmit(e) {
    e.preventDefault();
    
    const plant = await api.plants.create({image: await compress(image)});
    onSuccess(plant)
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <br/>
      <h1>Add Plant</h1>
      <br/>
          <input
            type="file"
            name="image"
            id="image"
            onChange={e => setImage(e.target.files[0])}
          />
        <br/>
        <br/>
        <Button className="submitButton" type="submit">Submit</Button>
  </form>
  );
  }

  function compress (image) {
    return new Promise(resolve => Resizer.imageFileResizer (
      image,
       1024,
       1024,
       'JPEG',
       75,
       0,
       resolve,
       "blob"
     ));
    
  }