import ReactDOM from "react-dom";
import React, { useState } from "react";
import api from "../api";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export function AddPlant() {
  const [plantname, setPlantname] = useState("");
  const [buydate, setBuydate] = useState("");
  const [comment, setcomment] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await api.plants.create({ name: plantname, buydate, comment });
    setPlantname("");
    setBuydate("");
    setcomment("");
  }
  return (
    <form onSubmit={handleSubmit}>
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

        {/* <p>Plant type:</p>
        <input
          type="text"
          name="plantname"
          value={plantname}
          onChange={e => setPlantname(e.target.value)}
        /> */}
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

        {/* <p>Buy date:</p>
        <input
          type="text"
          name="buydate"
          value={buydate}
          onChange={e => setBuydate(e.target.value)}
        /> */}

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
              onChange={e => setcomment(e.target.value)}
              placeholder="Add important information about your plant"
            />
          </Col>
        </FormGroup>

        {/* <p>Comment:</p>
        <textarea
          name="comment"
          value={comment}
          onChange={e => setcomment(e.target.value)}
        /> */}
        <br />

        <input type="submit" />
      </div>
    </form>
  );
}

ReactDOM.render(<AddPlant />, document.getElementById("root"));
