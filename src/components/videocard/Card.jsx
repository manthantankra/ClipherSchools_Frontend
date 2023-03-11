import React from 'react';
import './Card.css';
import img from '../../img/1.jpg';
import { Link } from "react-router-dom";

const Card = ({ type }) => {
    return (
        <Link to='/video/test' style={{ textDecoration: "none" }}>
            <div className='card'>
                <img src={img} alt="" className="image" />

                <div className="details">
                    <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt="" className='channelImg' />

                    <div className="info">
                        <h1 className="title">Test Video</h1>
                        <h2 className='channelName'>VideoTube</h2>
                        <div className="info">660,908 views • 1 day ago</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card
