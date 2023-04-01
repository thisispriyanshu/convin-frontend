import React from 'react'
import { useState ,useEffect} from 'react';
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import {toast} from 'react-toastify'
import {v4 as uuid} from 'uuid'

export default function CardCreate() {
  const unique_id = uuid();
  const small_id = unique_id.slice(0,8)
  const id=small_id
  const [title,setTitle]=useState("");
  const [link,setLink]=useState("");
  const [bucketId,setBucketId]=useState();
  const [bucket,setBucket]=useState([]);
  const [videosId,setVideosId]=useState([]);
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

  let pushId= (id)=>{
    setVideosId(pre=>[...pre,id]);
  }

  let handleSubmit=async(e)=>{
    e.preventDefault();
    try{
    let res=await fetch("http://localhost:3000/videos",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify({
        id:id,
        title:title,
        link:link,
        bucketId:bucketId,
      }),
    });
    
    let res2=await fetch("http://localhost:3000/buckets",{
       method: "PUT",
       headers: {"Content-Type": "application/json"},
       body:JSON.stringify({
        videosId:videosId,
       })
    });

    if(res.status===201) {
      setTitle("");
      setLink("");
      setBucketId();
      setVideosId();
      toast.success("Card Saved Sucessfully")
    }
    else if(res.status===201){
      toast.error(res2.status + 'Failed due to res2!');
    }
    else{
      toast.error('Failed due to res!');
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
    <Form onSubmit={handleSubmit} key={small_id} >
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
                   <option key={index} value={buc.bucketId} onClick={()=>{bucketId=buc.bucketId}}>
                    {buc.title}</option>
                   )
              })
            }
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="cardSelect">Do you want to see change on HomePage?</Form.Label>
          <Form.Select id="cardSelect" as="select" value={id} onChange={e=>{
            pushId(e.target.value)}} >
            <option value={id} onClick={()=>{pushId(id)}}>Yes</option>
            {/* <option>No</option> */}
          </Form.Select>
        </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>  
  )
      }
