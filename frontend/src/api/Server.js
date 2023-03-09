import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Server() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:8080/buckets')
    .then((res)=>{return res.json();})
    .then((resp)=>{setData(resp);})
    .catch((err)=>console.log(err.message));
  },[])
    return (
      <div className='box'>
          {data.map(item=>{
            return <h3 key={item.bucketId}>data.bucket</h3>
          })}
      </div>
  )
}
