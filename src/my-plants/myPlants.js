import React, { useState, useEffect } from "react";
import api from "../api";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Col,
  CardColumns
} from "reactstrap";

export function MyPlants() {
  const [plants, setPlants] = useState([]);
  const [buydate, setBuydate] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    api.plants.get().then(setPlants, setBuydate, setComment);
  }, []);

  return (
    <div>
      <br></br>
      <CardColumns>
        {plants.map(plant => (
          <p key={plant._id}>
            <Card
              body
              inverse
              style={{
                backgroundColor: "#333",
                borderColor: "#333",
                position: ""
              }}
              className="text-left"
            >
              <CardBody>
                <CardTitle>
                  <h3>{plant.name}</h3>
                </CardTitle>
                <CardSubtitle>Bought: {plant.buydate}</CardSubtitle>
                <CardImg
                  top
                  width="100%"
                  src={plant.image}
                  alt="Card image cap"
                />
                <CardText>Comment: {plant.comment}</CardText>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Button>Get schedule</Button>
                </Col>
              </CardBody>
            </Card>
          </p>
        ))}
      </CardColumns>
    </div>
  );
}
