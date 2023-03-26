import React from 'react'
import { useState ,useEffect} from 'react';

import BucketHomePage from '../components/BucketHomePage'
import Header from '../components/Header'
import Stack from 'react-bootstrap/Stack'

export default function Home() {
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
    <div>
        <Header/>
      {/* visit every bucket using map */}
      <Stack gap={3}>
      <BucketHomePage/>
      </Stack>
    </div>
  )
}
