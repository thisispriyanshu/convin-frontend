import React from 'react'
import BucketHomePage from '../components/BucketHomePage'
import Header from '../components/Header'
import Stack from 'react-bootstrap/Stack'

export default function Home() {
  return (
    <div>
        <Header/>
      {/* visit every bucket using map */}
      <Stack gap={3}>
        <BucketHomePage/>
        <BucketHomePage/>
        <BucketHomePage/>
      </Stack>

    </div>
  )
}
