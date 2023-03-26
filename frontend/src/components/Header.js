import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import HistoryPage from '../pages/HistoryPage';
import CardCreate from '../pages/CardCreate';
import VideoPage from '../pages/VideosPage'
import { useState ,useEffect} from 'react';

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  const [bucket,setBucket]=useState([]);
  const fetchBuckets= async()=>{
  fetch("http://localhost:3000/buckets")
  .then((response) => response.json())
  .then((data) => setBucket((pre)=>{
    return [...data];
  }));
  }
  useEffect(()=>{
    fetchBuckets();
  },[]);
  return (
    // <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="">ConVin Tube</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/historyPage">History</Nav.Link>
            <NavDropdown title="Buckets" id="collasible-nav-dropdown">
              {
                bucket.map((buc,index)=>{
              return(<NavDropdown.Item href="/videoPage" bucket={{id:buc.bucketId}}>{buc.title}</NavDropdown.Item>)
                })
              }
            </NavDropdown>
            <Nav.Link href="/CardCreate" className='bg-primary text-black'>Create New Card</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Github Repo: <a href="https://github.com/thisispriyanshu/convin-frontend">Priyanshu Agrawal</a>
          </Navbar.Text>
        </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
