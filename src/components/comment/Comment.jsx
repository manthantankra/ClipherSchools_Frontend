import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Comment.css';

const Comment = ({ comment }) => {

    const [channel, setChannel] = useState({});

    useEffect(() => {
        const fetchComment = async () => {
            const res = await axios.get(`/users/find/${comment.userId}`);
            setChannel(res.data)
        };
        fetchComment();
    }, [comment.userId]);


    return (
        <div className='comment'>
            <img src={channel?.img} alt='' />
            <div className='commentDetails'>
                <span>
                    {channel?.name}<span>1 day ago</span>
                </span>

                <span>
                    {comment?.desc}
                </span>
            </div>
        </div>
    )
}

export default Comment
