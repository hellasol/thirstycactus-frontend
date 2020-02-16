import React, { useState } from "react";
import api from "../../../api";
import { Col, FormGroup, Label, Input } from "reactstrap";

export function PlantFormStep({ onSuccess }) {
  const [image, setImage] = useState(null); 

  async function handleSubmit(e) {
    e.preventDefault();
    const plant = await api.plants.create({image});
    onSuccess(plant)
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
    <div>
      <br/>
      <h1>Upload a picture</h1>
      <br/>
      <FormGroup row>
        <Label for="image" sm={2}>
          Image
        </Label>
        <Col sm={10}>
          <Input
            type="file"
            name="image"
            id="image"
            onChange={e => setImage(e.target.files[0])}
          />
        </Col>
      </FormGroup>
      <br />
      <button type="submit">Submit</button>
    </div>
  </form>
  );
  }