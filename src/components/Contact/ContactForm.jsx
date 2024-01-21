import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function ContactForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
  };
  return (
    <>
      <Form onSubmit={handleFormSubmit} >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleFormChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleFormChange}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            name="message"
            placeholder="Enter message"
            value={formData.message}
            onChange={handleFormChange}
          ></Form.Control>
        </Form.Group>
        <Button variant="secondary" type="submit">Submit</Button>
        <Button varaint="secondary" onClick={onClose}>Close</Button>
      </Form>
    </>
  );
}

export default ContactForm;
