import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Avatar, IconButton } from '@mui/material/';
import { Card } from 'react-bootstrap';
import { PersonAdd } from '@mui/icons-material/';
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { followUser, addFriend } from '../store/actionCreators/followCreator';

function CardAddPeople({ user }) {
  const dispatch = useDispatch();

  const doFollow = (followId) => {
    dispatch(followUser(followId));
    console.log(followId, `<<<<<<<<<<<<<<<<<Follow`);
  };

  const handleAddFriend = (userId) => {
    dispatch(addFriend(userId));
    // console.log(userId);
  }

  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container-addfriend">
            <div className="card-left-side-addfriend d-flex justify-content-center align-items-center">
              {user.imgUrl ? (
                <Avatar className="avatar-card" alt="David" src={user.imgUrl} sx={{ width: 75, height: 75 }} variant="rounded"></Avatar>
              ) : (
                <Avatar className="avatar-card" alt={user.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 75, height: 75 }} variant="rounded"></Avatar>
              )}
            </div>
            <div className="card-right-side d-flex flex-row align-items-center">
              <div className="content-addfriend d-flex flex-column" style={{ width: '160px', textAlign: 'left' }}>
                <div className="addfriend-name" style={{ width: '350px' }}>
                  {user.username}
                </div>
                <div style={{ width: '350px' }} className="addfriend-firstName">
                  {user.firstName + ' ' + user.lastName}
                  {/* <p>{user.city}</p> */}
                </div>
                <div style={{ width: '350px' }} className="addfriend-city">
                  {user.city}
                </div>
              </div>
              <div style={{ width: '100px' }} className="d-flex justify-content-center align-items-center">
                <IconButton onClick={() => handleAddFriend(user._id)}>
                  <PersonAdd sx={{ width: 35, height: 35, color: blue[500] }} />
                </IconButton>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardAddPeople;
