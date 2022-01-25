import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Avatar, IconButton } from '@mui/material/';
import { Card } from 'react-bootstrap';
import { PersonAdd } from '@mui/icons-material/';
import { blue } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { followUser, addFriend, fetchFollowing } from '../store/actionCreators/followCreator';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { successToastAlert, warnToastAlert } from '../hooks/errorToastAlert';

function CardAddPeople({ user }) {
  const dispatch = useDispatch();
  const { following } = useSelector((state) => state.userReducer);
  const friends = [];
  following.forEach((element) => {
    friends.push(element._id);
  });

  const handleAddFriend = (userId) => {
    dispatch(addFriend(userId))
      .then(() => {
        successToastAlert(`Sending friend request to ${user.username}`, 'top-center', 3000, true);
      })
      .catch((err) => {
        warnToastAlert(`You've already sent request to ${user.username}`, 'top-center', 3000, true);
        // console.log(err);
      });
  };

  useEffect(() => {
    dispatch(fetchFollowing());
  }, []);

  const { afterClickPostLoading } = useSelector((state) => state.postReducer);

  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container-addfriend">
            <div className="card-left-side-addfriend d-flex justify-content-center align-items-center">
              {user.imgUrl ? (
                <Avatar className="avatar-card" alt="David" src={user.imgUrl} sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
              ) : (
                <Avatar className="avatar-card" alt={user.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
              )}
            </div>
            <div className="card-right-side-addfriend d-flex flex-row align-items-center">
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
                {user._id == localStorage.id || friends.includes(user._id) ? (
                  <div></div>
                ) : (
                  <IconButton onClick={() => handleAddFriend(user._id)}>
                    <PersonAdd sx={{ width: 35, height: 35, color: blue[500] }} />
                  </IconButton>
                )}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      {/* return post.type === 'location' ? <CardLocation key={post._id} post={post} /> : post.type === 'text' ? <CardTextImage key={post._id} post={post} /> : <CardMusic key={post._id} post={post} />; */}
      {/* {afterClickPostLoading ? (
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
      )} */}
    </>
  );
}

export default CardAddPeople;
