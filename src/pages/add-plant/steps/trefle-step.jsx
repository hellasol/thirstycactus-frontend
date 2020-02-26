import React, { useState, useEffect } from "react";
import api from "../../../api";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
} from "reactstrap";
import {SpinnerAnimation} from "../../../components/spinner"


export function TrefleStep({ onSuccess, plant }) {
  const [treflePlants, setTreflePlants] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true)
    api.plants.trefle(plant._id).then(setTreflePlants).finally(() => setPending(false));
  }, [plant._id]);
  if(pending) {
    return <SpinnerAnimation />
  }

  async function handleClick(trefleid) {
    const newPlant = await api.plants.update(plant._id, { trefleid });
    onSuccess(newPlant);
  }
  return (
    <>
    <br />
    <h2>Find your plant</h2>
    <br />
      {treflePlants.map(tp => <TreflePlant key={tp.id} treflePlant={tp} onClick={() => handleClick(tp.id)}/>)}
   </>
  )
  }

  function TreflePlant({treflePlant, onClick}) {
    const [image] = treflePlant.images;
    return (
      <Card key={treflePlant.id}>
        {image && <CardImg top width="100%" src={image} alt="Card image cap" />}
        <CardBody>
          <CardText>Common name: {treflePlant.commonName}</CardText>
          <CardText>Scientific name: {treflePlant.scientificName}</CardText>
          <CardText>Family: {treflePlant.familyName}</CardText>
          <Button onClick={onClick}>Select</Button>
        </CardBody>
      </Card>
    );
  }