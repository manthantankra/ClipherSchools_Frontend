import React from 'react'
import './Video.css';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../../components/comments/Comments';

const Video = () => {
  return (
    <div className='video'>
      <div className="content">

        <div className="video-wrap">
          <iframe
            width="100%"
            height="720"
            src="https://youtu.be/uJtoY919sjU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h1 className="video-title">Test Video</h1>

        <div className="video-details">
          <span className='video-info'>7,948,154 views • Jun 22, 2022</span>

          <div className="video-buttons">
            <div className="button">
              <ThumbUpOutlinedIcon /> 123
            </div>

            <div className="button">
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </div>

            <div className="button">
              <ReplyOutlinedIcon /> Share
            </div>

            <div className="button">
              <AddTaskOutlinedIcon /> Save
            </div>
          </div>
        </div>
        <hr />

        <div className="channel">
          <div className="channelInfo">
            <img src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />

            <div className="channel-detail">
              <span className="channel-name">Mr. Beast</span>
              <span className="channel-counter">200k subscriber</span>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repudiandae. Doloribus quo nostrum adipisci, accusamus id officiis ipsam ut voluptas repudiandae ea totam rem distinctio reprehenderit necessitatibus temporibus dolorem eum nobis, officia unde enim!
              </p>
            </div>
          </div>

          <button className="subs-btn">Subscribe</button>
        </div>
        <hr />
        <Comments />
      </div>
    </div>
  )
}

export default Video;
