import React, { useState, useEffect } from "react";
import api from "../../api";
import {
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  Col,
  CardColumns,
  Input,
} from "reactstrap";

export function AllPlants() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    api.plants.get().then(setPlants);
  }, []);

  return (
    <div>
      <br />
      <CardColumns>
        {plants.map((plant) => (
          <Plant key={plant._id} plant={plant} />
        ))}
      </CardColumns>
    </div>
  );
}

function Plant({ plant }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.comments.findByPlantId(plant._id).then(setComments);
  }, [plant._id]);

  async function handleCommentAdd(comment) {
    const newComment = await api.comments.add(comment, plant._id);
    setComments([...comments, newComment]);
  }
  return (
    <>
      <Card
        body
        inverse
        style={{
          backgroundColor: "#333",
          borderColor: "#333",
          position: "",
        }}
        className="text-left"
      >
        <CardImg top width="100%" src={plant.image} alt="Card image cap" />
        <CardBody>
          <CardText>Common name: {plant.commonName}</CardText>
          <CardText>Scientific name: {plant.scientificName}</CardText>
          <CardText>Family: {plant.familyName}</CardText>
          <CardText>Plant log: </CardText>
          {comments.map((comment) => (
            <CardText key={comment._id}>{comment.comment}</CardText>
          ))}

          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <CommentBox
              onCommentAdd={(comment) => handleCommentAdd(comment, plant._id)}
            />
          </Col>
        </CardBody>
      </Card>
    </>
  );
}

function CommentBox({ onCommentAdd }) {
  const [comment, setComment] = useState("");
  function handleClick() {
    onCommentAdd(comment);
    setComment("");
  }
  return (
    <>
      <Input
        type="textarea"
        name="comment"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add information about your plant"
      />
      <Button onClick={() => handleClick()}>Submit</Button>
    </>
  );
}
