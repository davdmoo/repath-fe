import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Avatar, IconButton } from '@mui/material/';
import { Card } from 'react-bootstrap';
import { PersonAdd } from '@mui/icons-material/';
import { blue } from '@mui/material/colors';

function CardAddPeople() {
  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container-addfriend">
            <div className="card-left-side-addfriend d-flex">
              <Avatar className="avatar-card" alt="Raisa" src="https://cdn.medcom.id/dynamic/content/2021/10/05/1335994/WIbmjnRkZx.jpg?w=480" sx={{ width: 75, height: 75 }} variant="rounded"></Avatar>
            </div>
            <div className="card-right-side d-flex flex-row align-items-center">
              <div className="content-addfriend d-flex" style={{ width: '450px', textAlign: 'left' }}>
                <div className="addfriend-name" style={{ width: '350px' }}>
                  Raisa Andriana
                </div>
                <div style={{ width: '100px' }} className="d-flex justify-content-center align-items-center">
                  <IconButton>
                    <PersonAdd sx={{ width: 40, height: 40, color: blue[500] }} />
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

export default CardAddPeople;
