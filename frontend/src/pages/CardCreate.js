import React from 'react'
import { useState ,useEffect} from 'react';
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {toast} from 'react-toastify'

export default function CardCreate() {
  
  const [title,setTitle]=useState("");
  const [link,setLink]=useState("");
  const [bucketId,setBucketId]=useState();
  const [bucket,setBucket]=useState([]);
  const [videoId,setVideoId]=useState([]);
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
  

  let handleSubmit=async(e)=>{
    e.preventDefault();
    try{
    let res=await fetch("http://localhost:3000/videos",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({
        title:title,
        link:link,
        bucketId:bucketId,
      }),
    });
    
    if(res.status===201){
      setTitle("");
      setLink("");
      setBucketId();
      toast.success("Card Saved Sucessfully")
    }
    else{
      toast.error('Failed!');
    }
  }
  catch(err){
    toast.error('Failed : '+err.message);
  }
  }
  
  return (
    <div>
      <Header/>
      <br/>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicVideoTitle">
        <Form.Label>Video Title</Form.Label>
        <Form.Control type="text" placeholder="Video Title" value={title} onChange={e=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicVideoLink">
        <Form.Label>Video Link</Form.Label>
        <Form.Control type="text" placeholder="Video Link" value={link} onChange={e=>setLink(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label htmlFor="cardSelect">Select Card Bucket</Form.Label>
          <Form.Select id="cardSelect" as="select" value={bucketId} onChange={e=>{
            setBucketId(e.target.value)}} >
            {
              bucket.map((buc,index)=>{
                   return (
                   <option value={buc.bucketId} onClick={()=>{bucketId=buc.bucketId}}>{buc.title}</option>
                   )
              })
            }
          </Form.Select>
        </Form.Group>
        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>  
  )
      }
