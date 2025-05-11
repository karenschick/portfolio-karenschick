import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap"; // Import form and modal components from React Bootstrap

// Functional component for the contact form
function ContactForm({ onClose }) {
  // useState to manage form field values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  /**
   * Handles changes to form inputs
   * Updates the corresponding field in the formData state
   */
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Handles form submission
   * Prevents default page reload and logs form data
   */
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("formData:", formData);
  };
  return (
    <>
      {/* Contact form layout using Bootstrap */}
      <Form onSubmit={handleFormSubmit}>
        {/* Name field */}
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

        {/* Email field */}
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

        {/* Message field */}
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

        {/* Submit and Close buttons */}
        <Button variant="secondary" type="submit">
          Submit
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
