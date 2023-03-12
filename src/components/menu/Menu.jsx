import React from 'react'
import './Menu.css'
import img from '../../img/logo.png';
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Menu = () => {

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='menu'>
      <div className="items">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="logo">
            <img src={img} alt="" />
            VideoTube
          </div>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="item">
            <HomeIcon />
            Home
          </div>
        </Link>

        <Link to="trends" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="item">
            <ExploreOutlinedIcon />
            Explore
          </div>
        </Link>

        <Link to="subscriptions" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="item">
            <SubscriptionsOutlinedIcon />
            Subcriptions
          </div>
        </Link>

        <hr />

        <div className="item">
          <VideoLibraryOutlinedIcon />
          Library
        </div>

        <div className="item">
          <HistoryOutlinedIcon />
          History
        </div>

        <hr />

        {!currentUser && <> <div className="login">
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{ textDecoration: "none" }}>
            <div>
              <button className='btn'>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </button>
            </div>
          </Link>
        </div>

          <hr />
        </>
        }
        <div className="title">BEST OF VIDEO TUBE</div>

        <div className="item">
          <LibraryMusicOutlinedIcon />
          Music
        </div>

        <div className="item">
          <SportsEsportsOutlinedIcon />
          Sports
        </div>

        <div className="item">
          <SportsBasketballOutlinedIcon />
          Gaming
        </div>

        <div className="item">
          <MovieOutlinedIcon />
          Movies
        </div>

        <div className="item">
          <ArticleOutlinedIcon />
          News
        </div>

        <div className="item">
          <LiveTvOutlinedIcon />
          Live
        </div>

        <hr />

        <div className="item">
          <SettingsOutlinedIcon />
          Settings
        </div>

        <div className="item">
          <FlagOutlinedIcon />
          Report
        </div>

        <div className="item">
          <HelpOutlineOutlinedIcon />
          Help
        </div>

      </div>
    </div>
  )
}

export default Menu
