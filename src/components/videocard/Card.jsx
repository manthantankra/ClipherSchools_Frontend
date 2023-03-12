import React, { useEffect, useState } from 'react';
import './Card.css';
import { Link } from "react-router-dom";
import { format } from 'timeago.js';
import axios from 'axios';

const Card = ({ type, video }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users/find/${video.userId}`);
            setUser(res.data);
        }
        fetchUser();
    }, [video.userId]);

    return (
        <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
            <div className='card'>
                <img src={video.imgUrl} alt="" className="image" />

                <div className="details">
                    <img src={user.img} alt="" className='channelImg' />

                    <div className="info">
                        <h1 className="title">{video.title}</h1>
                        <h2 className='channelName'>{user.name}</h2>
                        <div className="info">{video.views} views • {format(video.createdAt)}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
