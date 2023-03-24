import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Buckets from 'frontend\data\db.json'

export default function BucketHomePage() {
  return (
    <Container fluid="md">
        {/* {
          Buckets.map(item)
        } */}
        <Row>
        <h3>Education Videos</h3>
        </Row>
        <Row>
            <Col xs={12} md={6} lg={4} className='my-2'>
        <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        </Card.Text>
        <Button variant="primary">Play Video</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} md={6} lg={4} className='my-2'>
        <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        </Card.Text>
        <Button variant="primary">Play Video</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col xs={12} md={6} lg={4} className='my-2'>
        <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        </Card.Text>
        <Button variant="primary">Play Video</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Button>View All</Button>
    </Col>
        </Row>
    </Container>
  )
}
