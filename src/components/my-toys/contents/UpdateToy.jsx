import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const UpdateToy = ({ toyId, handleClose }) => {
  const [toyData, setToyData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = form.quantity.value;
    const price = form.price.value;

    const description = form.description.value;
    const updateToDb = {
      quantity,
      price,
      description,
    };

    fetch(`https://legends-toy-universe-server.vercel.app/toys/${toyId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToDb),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control type="number" name="quantity" />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Toy
        </Button>
      </Form>
    </div>
  );
};

export default UpdateToy;