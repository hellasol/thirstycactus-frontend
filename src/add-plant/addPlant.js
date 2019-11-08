import ReactDOM from "react-dom";
import React, { useState } from "react";
import api from "../api";
import { Col, FormGroup, Label, Input, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export function AddPlant() {
  const [plantname, setPlantname] = useState("");
  const [buydate, setBuydate] = useState("");
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    await api.plants.create({ name: plantname, buydate, comment, image });
    setPlantname("");
    setBuydate("");
    setComment("");
    setImage(null);
  }

  return (
    <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <div>
        <br></br>
        <h1>Add a new Plant</h1>
        <br></br>
        <FormGroup row>
          <Label for="addPlant" sm={2}>
            Plant Type
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="plantname"
              value={plantname}
              id="addPlant"
              placeholder="Sunflower"
              onChange={e => setPlantname(e.target.value)}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="addDate" sm={2}>
            Buy Date
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="buydate"
              value={buydate}
              id="addDate"
              onChange={e => setBuydate(e.target.value)}
              placeholder="01.01.2019"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="comment" sm={2}>
            Comment
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="comment"
              id="comment"
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Add important information about your plant"
            />
          </Col>
        </FormGroup>

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
        <Input type="submit">submit</Input>

        {/* <NavLink type="submit" href="/myPlants">Submit</NavLink> */}
      </div>
    </form>
  );
}
