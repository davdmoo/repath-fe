import React, { useState } from 'react';
import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, LocationOn, Delete } from '@mui/icons-material/';
import { red } from '@mui/material/colors';
import { Card } from 'react-bootstrap';

function CardLocation() {
  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container">
            <div className="card-left-side d-flex">
              <Avatar className="avatar-card" alt="Zemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} variant="rounded"></Avatar>
              <div>
                <span className="dot-card-location">
                  <LocationOn sx={{ color: red[50] }} />
                </span>
              </div>
            </div>
            <div className="card-right-side d-flex flex-row">
              <div className="content-text" style={{ width: '250px', textAlign: 'left' }}>
                <div className="location-title">
                  Arrived in <span className="fw-bold">Bandung</span>
                </div>
              </div>
              <div className="content-location d-flex flex-row" style={{ width: '200px' }}>
                <div className="rounded-likes-location">
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} />
                </div>

                <IconButton>
                  <Delete sx={{ color: red[500] }} />
                </IconButton>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardLocation;
