import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function CardCreate() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicVideoTitle">
        <Form.Label>Video Title</Form.Label>
        <Form.Control type="text" placeholder="Video Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicVideoLink">
        <Form.Label>Video Link</Form.Label>
        <Form.Control type="text" placeholder="Video Link" />
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label htmlFor="cardSelect">Select Card Bucket</Form.Label>
          <Form.Select id="cardSelect">
            <option>Educational Videos</option>
            <option>Comdey Videos</option>
            <option>Sci-fi Videos</option>
          </Form.Select>
        </Form.Group>
        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>  
  )
};
