import React, { useState, useEffect } from "react";
import api from "../api";

export function MyPlants() {
  const [plants, setPlants] = useState([]);
  const [buydate, setBuydate] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    api.plants.get().then(setPlants, setBuydate, setComment);
  }, []);

  return (
    <div>
      <h1>All Your Plants:</h1>
      {plants.map(plant => (
        <p key={plant._id}>
          <hr></hr>
          <p>Name: {plant.name}</p>
          <p>Buy Date: {plant.buydate} </p>
          <p>Comment: {plant.comment} </p>
          <button>Get {plant.name}'s schedule</button>
        </p>
      ))}
    </div>
  );
}
