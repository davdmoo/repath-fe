import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Avatar from '@mui/material/Avatar';
import Header from '../components/Header';
import { Card } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container">
            <div className="card-left-side">
              <Avatar className="avatar-card" alt="Zemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} variant="rounded"></Avatar>
            </div>
            <div className="card-right-side d-flex flex-row">
              <div className="content-text" style={{ width: '250px', textAlign: 'left' }}>
                <div className="song-title">Listening to Grenade by Bruno Mars</div>
                <div className="album-title">Album Song - Sigle, 2016</div>
              </div>
              <div className="content-image-album">
                {' '}
                <Avatar alt="Bruno Mars" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} variant="rounded"></Avatar>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Home;
