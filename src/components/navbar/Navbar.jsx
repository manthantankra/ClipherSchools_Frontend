import React, { useState } from 'react'
import './Navbar.css'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import Upload from '../upload/Upload';

const Navbar = () => {

  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className='navbar'>
        <div className="nav-items">

          <div className="search">
            <input type="text" placeholder='Search' />
            <SearchOutlinedIcon />
          </div>

          {currentUser ?
            (
              <div className="user">
                <VideoCallOutlinedIcon onClick={() => setOpen(true)} style={{ cursor: "pointer" }} />
                <img src={currentUser.img} alt="" />
                {currentUser.name}
              </div>
            )
            : <Link to="signin" style={{ textDecoration: "none" }}>
              <button className='btn nav-btn'>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </button>
            </Link>}

        </div>
      </div >
      {open && <Upload setOpen={setOpen} />}

    </>
  )
}

export default Navbar
