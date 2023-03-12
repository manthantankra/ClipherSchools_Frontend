import React, { useEffect, useState } from 'react'
import './Video.css';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Comments from '../../components/comments/Comments';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { dislike, fetchSuccess, like } from '../../redux/videoSlice';
import { format } from 'timeago.js';
import { subscription } from '../../redux/userSlice';

const Video = () => {

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split("/")[2];

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        const channelRes = await axios.get(`/users/find/${videoRes.data.userId}`);

        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data))
      } catch (error) {

      }
    }
    fetchedData();
  }, [path, dispatch]);

  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  }

  const handleDisLike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  }

  const handleSub = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };



  return (
    <div className='video'>
      <div className="content">

        <div className="video-wrap">
          <video src={currentVideo.videoUrl} controls />
        </div>

        <h1 className="video-title">{currentVideo?.title}</h1>

        <div className="video-details">
          <span className='video-info'>{currentVideo?.views} views • {format(currentVideo?.createdAt)}</span>

          <div className="video-buttons">
            <div className="button" onClick={handleLike}>
              {currentVideo?.likes.includes(currentUser._id) ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />} {currentVideo?.likes.length}
            </div>

            <div className="button" onClick={handleDisLike}>
              {currentVideo?.dislikes.includes(currentUser._id) ? <ThumbDownIcon /> : <ThumbDownOffAltOutlinedIcon />} Dislike
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
            <img src={channel?.img} alt="" />

            <div className="channel-detail">
              <span className="channel-name">{channel?.name}</span>
              <span className="channel-counter">{channel?.subscribers} subscriber</span>
              <p className="description">
                {currentVideo?.desc}
              </p>
            </div>
          </div>

          <button className="subs-btn" onClick={handleSub}>{currentUser.subscribedUsers?.includes(channel._id)
            ? "SUBSCRIBED"
            : "SUBSCRIBE"}</button>
        </div>
        <hr />
        <Comments videoId={currentVideo._id} />
      </div>
    </div>
  )
}

export default Video;
