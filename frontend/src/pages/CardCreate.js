import React from 'react'
import { useState ,useEffect} from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {toast} from 'react-toastify'

export default function CardCreate() {
  
  const [title,setTitle]=useState("");
  const [link,setLink]=useState("");
  const [bucketId,setBucketId]=useState(null);
  const [bucket,setBucket]=useState([]);
  // const buckets=['b1','b2','b3'];
  const fetchBuckets= async()=>{
    let buckets= await fetch("https://my-json-server.typicode.com/thisispriyanshu/convin-frontend/buckets",{
      method:"GET",
      body:JSON.stringify({
        bucketId:bucketId,
        title:title,
      })
    });

    setBucket((pre)=>{
      return [...buckets];
    })
   
  }
  
  useEffect(()=>{
    fetchBuckets();
  },[]);
  let handleSubmit=async(e)=>{
    e.preventDefault();
    try{
    let res=await fetch("https://my-json-server.typicode.com/thisispriyanshu/convin-frontend/videos",{
      method: "POST",
      body:JSON.stringify({
        title:title,
        link:link,
        bucketId:bucketId,
      }),
    });
    // let resJson=await res.json;
    // console.log(obj)
    if(res.status===200){
      setTitle("");
      setLink("");
      setBucketId("");
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
            console.log(e.target.value);
            setBucketId(e.target.value)}} >
            {
              bucket.map((buc,index)=>{
                   return (<option value={buc.bucketId}>{buc.title}</option>)
              })
            }

          </Form.Select>
        </Form.Group>
        
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>  
  )
      }
