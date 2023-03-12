import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from '../../components/videocard/Card';
import axios from 'axios';


const Home = ({ type }) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await axios.get(`/videos/${type}`);
            setVideos(res.data);
        }
        fetchVideos();
    }, [type]);

    return (

        <div className='home'>

            {videos.map((video, i) => (
                <Card key={i} video={video} />
            ))}
        </div>
    )
}

export default Home
