import React, { useState } from 'react';
import { Avatar } from '@mui/material/';
import { Card } from 'react-bootstrap';

function CardFriendList() {
  return (
    <Card style={{ border: '0px' }}>
      <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
        <div className="card-container-friendlist">
          <div className="card-left-side-friendlist d-flex">
              <Avatar className="avatar-card" alt="David" src="https://cdn.medcom.id/dynamic/content/2021/10/05/1335994/WIbmjnRkZx.jpg?w=480" sx={{ width: 75, height: 75 }} variant="rounded"></Avatar
          </div>
          <div className="card-right-side d-flex flex-row align-items-center">
            <div className="content-friendlist" style={{ width: '250px', textAlign: 'left' }}>
              <div className="friendlist-name">
               Raisa Andriana
              </div>
              <div className="friendlist-city">Jakarta</div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardFriendList;
