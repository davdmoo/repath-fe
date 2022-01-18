import React, { useState } from 'react';
import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, MusicNote, Delete } from '@mui/icons-material/';
import { red } from '@mui/material/colors';
import { Card } from 'react-bootstrap';

function CardMusic() {
  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container">
            <div className="card-left-side d-flex">
              <Avatar className="avatar-card" alt="Zemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} variant="rounded"></Avatar>
              <div>
                <span className="dot-card-music">
                  <MusicNote sx={{ color: red[50] }} />
                </span>
              </div>
            </div>
            <div className="card-right-side d-flex flex-row">
              <div className="content-text" style={{ width: '250px', textAlign: 'left' }}>
                <div className="song-title">
                  Listening to Grenade by <span className="fw-bold"> Bruno Mars</span>
                </div>
                <div className="album-title">Album Song - Sigle, 2016</div>
              </div>
              <div className="content-image-album d-flex flex-row" style={{ width: '200px' }}>
                {' '}
                <Avatar alt="Bruno Mars" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/BrunoMarsGrenade.jpg/220px-BrunoMarsGrenade.jpg" sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
                <div className="rounded-likes">
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} />
                </div>
                <div style={{ paddingTop: '5px' }}>
                  <IconButton>
                    <Delete sx={{ color: red[500] }} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardMusic;
