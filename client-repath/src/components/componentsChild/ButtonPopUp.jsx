import React from 'react';
import '../../assets/ButtonPopUp.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AddIcon from '@mui/icons-material/Add';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

function ButtonPopUp() {
  const navigate = useNavigate();
  const toFormTextImage = () => {
    navigate('/content');
  };
  return (
    // <div className='position-fixed'>
    <nav className="menu ">
      <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open" />
      <label className="menu-open-button" for="menu-open">
        <AddIcon sx={{ width: 35, height: 35 }} />
      </label>

      <a
        href="#"
        className="menu-item red"
        onClick={(e) => {
          e.preventDefault();
          toFormTextImage();
        }}
      >
        <ChatBubbleIcon sx={{ width: 35, height: 35 }} />{' '}
      </a>
      <a href="#" className="menu-item red">
        <LocationOnIcon sx={{ width: 35, height: 35 }} />
      </a>
      <a href="#" className="menu-item red">
        <MusicNoteIcon sx={{ width: 35, height: 35 }} />{' '}
      </a>
    </nav>
    // </div>
  );
}

export default ButtonPopUp;
