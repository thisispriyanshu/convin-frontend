import React from 'react'
import { useState, useEffect } from 'react';
import CardPage from './CardPage';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default function BucketHomePage() {
  const [bucket, setBucket] = useState([]);
  const fetchBuckets = async () => {
    fetch("http://localhost:3000/buckets")
      .then((response) => response.json())
      .then((data) => setBucket((pre) => {
        return [...data];
      }));
  }
  useEffect(() => {
    fetchBuckets();
  }, []);
  return (
    <Container fluid="md">
      {/* {console.log(bucket)} */}
      {
        bucket.map((buc, index) => {
          return (
            <div>
              <Row key={buc.bucketId}>
                <h3>{buc.title}</h3>
              </Row>
              <Row>
                <Col xs={12} md={6} lg={4} className='my-2'>{
                    buc.videosId.map((vid, index) => {
                      return (
                        <CardPage id={vid} />
                      )
                    })}
                </Col>
              </Row>
            </div>
          )
        })
      }
    </Container>
  )
}
