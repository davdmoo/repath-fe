import React, { useState } from 'react';
import { Avatar } from '@mui/material/';
import { Card } from 'react-bootstrap';

function CardFriendList({ user }) {
  console.log(user.following.imgUrl);
  return (
    <Card style={{ border: '0px' }}>
      <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
        <div className="card-container-friendlist">
          <div className="card-left-side-friendlist d-flex">
            {user.following.imgUrl ? (
              <Avatar className="avatar-card" alt="David" src={user.following.imgUrl} sx={{ width: 75, height: 75 }} variant="rounded"></Avatar>
            ) : (
              <Avatar className="avatar-card" alt={user.following.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 75, height: 75 }} variant="rounded"></Avatar>
            )}
          </div>
          <div className="card-right-side d-flex flex-row align-items-center">
            <div className="content-friendlist" style={{ width: '250px', textAlign: 'left' }}>
              <div className="friendlist-name">
                {user.following.firstName} {user.following.lastName}
              </div>
              <div className="friendlist-city">{user.following.city}</div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardFriendList;
