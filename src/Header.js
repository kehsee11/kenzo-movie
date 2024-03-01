import React from 'react'
import  "./Header.css";
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className="header">
        <div className='header__icons'>
        <div className='header__icon header__icon--active'>
        <HomeIcon />
        <p>Home</p> </div>
        <div className='header__icon '>
        <LiveTvIcon />
        <p>Verified</p> </div>
        <div className='header__icon'>
        <FlashOnIcon />
        <p>Trending</p> </div> 
        <div className='header__icon '>
        <PersonOutlineIcon />
        <p>Me</p> </div></div>
        <div className='header__search'>
         <SearchIcon />
        <input placeholder="Hi,agba programmer   🐱!" type="text" />
        </div>
        <img src="/images/nft.png"
        alt=""/>
       
    </div>
  )
}

export default Header