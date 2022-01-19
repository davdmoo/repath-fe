import React from 'react'
import '../../assets/ButtonPopUp.css'
// import TextFieldsIcon from '@mui/icons-material/TextFields';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AddIcon from '@mui/icons-material/Add';

function ButtonPopUp() {
    return (
        <nav className="menu">

            <input
                type="checkbox"
                href="#"
                className="menu-open"
                name="menu-open"
                id="menu-open"
            />
            <label className="menu-open-button red" for="menu-open"  >
               <AddIcon/>
            </label>

            <a href="#" className="menu-item red">  <ChatBubbleIcon /> </a>
            <a href="#" className="menu-item red">  <LocationOnIcon /></a>
            <a href="#" className="menu-item red"> <MusicNoteIcon /> </a>

        </nav>
    )
}

export default ButtonPopUp;