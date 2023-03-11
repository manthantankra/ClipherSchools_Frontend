import React from 'react'
import './Navbar.css'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-items">

        <div className="search">
          <input type="text" placeholder='Search'/>
          <SearchOutlinedIcon />
        </div>

        <Link to="signin" style={{ textDecoration: "none" }}>
          <button className='btn nav-btn'>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </button>
        </Link>

      </div>
    </div>
  )
}

export default Navbar
