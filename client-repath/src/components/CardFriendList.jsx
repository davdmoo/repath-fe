<<<<<<< HEAD
import React, { useState } from 'react';
import { Avatar } from '@mui/material/';
import { Card } from 'react-bootstrap';
import { red } from '@mui/material/colors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useDispatch } from 'react-redux';
import { delFriendReq } from '../store/actionCreators/followCreator';
=======
import React, { useState, useEffect } from 'react';
import { Avatar, IconButton } from '@mui/material/';
import { Card, Modal, Button } from 'react-bootstrap';
import { red } from '@mui/material/colors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useDispatch, useSelector } from 'react-redux';
import { delFriendReq, delOneFriend } from '../store/actionCreators/followCreator';
>>>>>>> b388d509f2790f6d8fcc670e8476111e839efe75

function CardFriendList({ user }) {
  const dispatch = useDispatch()

  const handleDelFriend = (reqId) => {
<<<<<<< HEAD
    dispatch(delFriendReq(reqId))
  }
  return (
    <Card style={{ border: '0px' }}>
      <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
        <div className="card-container-friendlist">
          <div className="card-left-side-friendlist d-flex align-items-center">
            {user.imgUrl ? (
              <Avatar className="avatar-card" alt="David" src={user.imgUrl} sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
            ) : (
              <Avatar className="avatar-card" alt={user.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
            )}
          </div>
          <div className="card-right-side-friendlist d-flex flex-row align-items-center">
            <div className="content-friendlist" style={{ width: '250px', textAlign: 'left' }}>
              <div className="friendlist-name">
                {user.firstName} {user.lastName}
=======
    dispatch(delOneFriend(reqId));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const doDelete = (postId) => {
    // dispatch(deletePost(postId)).then(() => {
    // warnToastAlert('Success deleted post!', 'top-center', 3000, false);
    // });
  };

  // const { following } = useSelector((state) => state.userReducer);
  // useEffect(() => {
  //   dispatch(fetchFollowing());
  // }, []);
  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container-friendlist">
            <div className="card-left-side-friendlist d-flex align-items-center">
              {user.imgUrl ? (
                <Avatar className="avatar-card" alt="David" src={user.imgUrl} sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
              ) : (
                <Avatar className="avatar-card" alt={user.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
              )}
            </div>
            <div className="card-right-side-friendlist d-flex flex-row align-items-center">
              <div className="content-friendlist" style={{ width: '200px', textAlign: 'left' }}>
                <div className="friendlist-name">
                  {user.firstName} {user.lastName}
                </div>
                <div className="friendlist-city">{user.city}</div>
>>>>>>> b388d509f2790f6d8fcc670e8476111e839efe75
              </div>
            </div>
            <div style={{ width: '100px' }} className="d-flex justify-content-center align-items-center">
              <IconButton onClick={handleShow}>
                <PersonRemoveIcon sx={{ width: 35, height: 35, color: red[500] }} />
              </IconButton>
            </div>
          </div>
<<<<<<< HEAD
          <div style={{ width: '100px' }} className="d-flex justify-content-center align-items-center">
                <PersonRemoveIcon onClick={() => handleDelFriend(user.phoneNumber)} sx={{ width: 35, height: 35, color: red[500] }} />
          </div>
        </div>
      </Card.Body>
    </Card>
=======
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Unfriend with{' '}
          <span className="fw-bold">
            {user.firstName} {user.lastName}
          </span>{' '}
          ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              handleDelFriend(user.phoneNumber);
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
>>>>>>> b388d509f2790f6d8fcc670e8476111e839efe75
  );
}

export default CardFriendList;
