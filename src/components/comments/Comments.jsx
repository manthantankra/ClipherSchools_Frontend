import React, { useEffect, useState } from 'react';
import './Comments.css';
import Comment from '../comment/Comment'
import { useSelector } from 'react-redux';
import axios from 'axios';

const Comments = ({ videoId }) => {

  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);

  useEffect(() => {

    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) { }
    };
    fetchComments();
  }, [videoId]);


  return (
    <div className='comments'>
      <div className="comments-header">
        <img src={currentUser?.img} alt="" />

        <input type="text" placeholder='Add a comment' />

      </div>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  )
}

export default Comments;
