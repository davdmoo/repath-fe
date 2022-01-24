import React, { useState } from 'react';
import { Avatar, IconButton } from '@mui/material/';
import { Card } from 'react-bootstrap';
import { red, blue } from '@mui/material/colors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useDispatch, useSelector } from 'react-redux';
import { accFriendReq, delFriendReq } from '../store/actionCreators/followCreator';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function CardRequestList({ user, reqId }) {
  const dispatch = useDispatch();

  const handleAccFriend = (id) => {
    dispatch(accFriendReq(id));
  };
  const handleDecFriend = (id) => {
    dispatch(delFriendReq(id));
  };

  const { afterClickPostLoading } = useSelector((state) => state.postReducer);

  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container-friendrequest">
            <div className="card-left-side-friendrequest d-flex">
              {user.imgUrl ? (
                <Avatar className="avatar-card" alt="David" src={user.imgUrl} sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
              ) : (
                <Avatar className="avatar-card" alt={user.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
              )}
            </div>
            <div className="card-right-side d-flex flex-row align-items-center">
              <div className="content-friendrequest" style={{ width: '130px', textAlign: 'left' }}>
                <div className="friendrequest-name">
                  {user.firstName} {user.lastName}
                </div>
                <div className="friendrequest-city">{user.city}</div>
              </div>
            </div>
            <div style={{ marginRight: '10px', padding: '15px' }} className="d-flex justify-content-between align-items-center">
              <IconButton onClick={() => handleAccFriend(reqId)}>
                {/* <IconButton onClick={() => handleAccFriend(user._id)}> */}

                <PersonAddIcon sx={{ width: 35, height: 35, color: blue[500] }} />
              </IconButton>
              <IconButton onClick={() => handleDecFriend(reqId)}>
                <PersonRemoveIcon sx={{ width: 35, height: 35, color: red[500] }} />
              </IconButton>
            </div>
          </div>
        </Card.Body>
      </Card>
      {afterClickPostLoading ? (
        <div>
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <CircularProgress color="inherit" />
              <p>Please wait...</p>
            </div>
          </Backdrop>
        </div>
      ) : (
        <div>
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={false}>
            <div className="d-flex ">
              <CircularProgress color="inherit" />
              <p>Please wait...</p>
            </div>
          </Backdrop>
        </div>
      )}
    </>
  );
}

export default CardRequestList;
