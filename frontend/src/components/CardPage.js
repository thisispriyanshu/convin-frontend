import React from 'react'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ReactPlayer from 'react-player'

export default function (props) {
    const [video, setVideo] = useState([]);
    const fetchVideos = async () => {
        fetch("http://localhost:3000/videos/" + `${props.id}`)
            .then((response) => response.json())
            .then((data) => setVideo(data));
    }
    useEffect(() => {
        fetchVideos();
    }, []);

    const playVideo=(ur)=>{
        <ReactPlayer url={ur}/>
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    <Card.Text>
                        <Card.Link href={video.link}>{video.link}</Card.Link>
                    </Card.Text>
                    <div>
                        <Button className='m-1' variant="warning">Edit</Button>
                        <Button className='m-1' variant="primary" onClick={()=>playVideo(video.link)}>Play Video</Button>
                        <Button className='m-1' variant="danger">Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
