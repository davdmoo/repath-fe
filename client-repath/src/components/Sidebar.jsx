import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import { red } from '@mui/material/colors';
import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';
import { useDispatch } from 'react-redux';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { fetchUserById } from '../store/actionCreators/userCreator';
import { Container } from '@mui/material';

function Sidebar() {
  const dispatch = useDispatch();
  const [currentUser, setcurrentUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    header: '',
    imgUrl: '',
  });

  useEffect(() => {
    dispatch(fetchUserById(localStorage.id)).then(({ data }) => {
      setcurrentUser({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        imgUrl: data.imgUrl,
      });
    });
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };
  const toEditProfile = () => {
    navigate('/profile');
  };
  const toFollowing = () => {
    navigate('/following');
  };
  const toSearchPeople = () => {
    navigate('/search-people');
  };
  const toFriendRequest = () => {
    navigate('/requests');
  };
  const doLogout = () => {
    localStorage.clear();
    navigate('/login');
  };
  const toLikedPosts = () => {
    navigate('/likes');
  };

  return (
    <div>
      <ListIcon style={{ width: '42px', height: '42px', marginRight: '10px' }} sx={{ color: red[50] }} onClick={handleShow} />
      <div className="sidebar-container d-flex">
        <Offcanvas style={{ marginLeft: '0vw', width: '200px', background: '#dc2626' }} show={show} onHide={handleClose}>
          <div className="header-sidebar d-flex flex row" style={{ height: '15vh', padding: '10px' }}>
            <Offcanvas.Header style={{ justifyContent: 'center', marginTop: '2vh' }}>
              {currentUser.imgUrl ? <Avatar alt={currentUser.firstName} style={{ marginLeft: '1vh' }} src={currentUser.imgUrl} /> : <Avatar alt={currentUser.firstName} style={{ marginLeft: '1vh' }} src="/static/images/avatar/1.jpg" />}
              <div className="d-flex flex row">
                <div style={{ color: '#f5f5f5', fontSize: 16, fontWeight: 'bolder', justifyContent: 'flex-end', marginLeft: '15px', paddingRight: '10px', paddingLeft: '10px' }}>
                  {`${currentUser.firstName.substring(0,12)}`} {`${currentUser.lastName.substring(0,12)}`}
                </div>

                <div style={{ color: '#f5f5f5', fontSize: 14, marginLeft: '15px', paddingRight: '10px', paddingLeft: '10px' }}>{`${currentUser.email.substring(0,16)}`}</div>
              </div>
            </Offcanvas.Header>
          </div>

          <div className="main-sidebar d-flex flex-column" style={{ height: '75vh', alignItems: 'flex-start', marginLeft: '3vh', marginTop: '3vh' }}>
            <div style={{ width: '100px' }}>
              <Button
                className="d-flex"
                variant="outline-light"
                style={{ border: '0px', width: '160px' }}
                onClick={(e) => {
                  e.preventDefault();
                  toHome();
                }}
              >
                <HomeIcon style={{ marginRight: '5px' }} />
                Home
              </Button>
            </div>
            <div style={{ width: '100px' }}>
              <Button
                className="d-flex"
                variant="outline-light"
                style={{ border: '0px', marginTop: '2vh', width: '160px' }}
                onClick={(e) => {
                  e.preventDefault();
                  toEditProfile();
                }}
              >
                <AccountCircleIcon style={{ marginRight: '5px' }} /> Profile
              </Button>
            </div>
            <div style={{ width: '100px' }}>
              <Button
                className="d-flex"
                variant="outline-light"
                style={{ border: '0px', marginTop: '2vh', width: '160px' }}
                onClick={(e) => {
                  e.preventDefault();
                  toLikedPosts();
                }}
              >
                <VolunteerActivismIcon style={{ marginRight: '5px' }} /> Liked Posts
              </Button>
            </div>
            <div style={{ width: '100px' }}>
              <Button
                className="d-flex"
                variant="outline-light"
                style={{ border: '0px', marginTop: '2vh', width: '160px' }}
                onClick={(e) => {
                  e.preventDefault();
                  toFollowing();
                }}
              >
                <GroupIcon style={{ marginRight: '5px' }} /> Friend List
              </Button>
            </div>
            <Button
              variant="outline-light"
              className="d-flex"
              style={{ border: '0px', marginTop: '2vh', width: '160px' }}
              onClick={(e) => {
                e.preventDefault();
                toFriendRequest();
              }}
            >
              <PersonPinSharpIcon style={{ marginRight: '5px' }} /> Friend Request
            </Button>
            <div style={{ width: '100px' }}>
              <Button
                variant="outline-light"
                className="d-flex"
                style={{ border: '0px', marginTop: '2vh', width: '160px' }}
                onClick={(e) => {
                  e.preventDefault();
                  toSearchPeople();
                }}
              >
                <PersonAddIcon style={{ marginRight: '5px' }} /> Search People
              </Button>
            </div>
          </div>
          <div className="footer-sidebar d-flex flex-column" style={{ height: '10vh' }}>
            <Button
              variant="outline-light"
              style={{ border: '0px' }}
              onClick={(e) => {
                e.preventDefault();
                doLogout();
              }}
            >
              <LogoutIcon style={{ marginRight: '10px' }} /> Sign Out
            </Button>
          </div>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Sidebar;
