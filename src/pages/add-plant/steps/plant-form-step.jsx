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
    <div>
      <br/>
      <h1>Add Plant</h1>
      <br/>
      <FormGroup>
          <Input
            type="file"
            name="image"
            id="image"
            onChange={e => setImage(e.target.files[0])}
          />
      </FormGroup>
      <br />
      <Button type="submit">Submit</Button>
    </div>
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