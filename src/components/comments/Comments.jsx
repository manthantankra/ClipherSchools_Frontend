import React from 'react';
import './Comments.css';
import Comment  from '../comment/Comment'

const Comments = () => {
  return (
    <div className='comments'>
      <div className="comments-header">
        <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />

        <input type="text" placeholder='Add a comment' />
      </div>

      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments;
