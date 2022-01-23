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
import { useDispatch } from 'react-redux';
import { fetchUserById } from '../store/actionCreators/userCreator';

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
        lastName: data.lastname,
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

  const doLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  // useEffect(() => {
  //   const id = localStorage.getItem('id')
  //   fetch(`${baseUrl}/users/${id}`, {
  //     method: 'GET',
  //     headers: {
  //       access_token: localStorage.getItem('access_token'),
  //     },
  //   })
  //     .then((response) => {

  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error('Something went wrong');
  //       }

  //     })
  //     .then((data) => {
  //       toEditProfile = () => {
  //         navigate('/profile');
  //       };
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // })

  return (
    <div>
      <ListIcon style={{ width: '45px', height: '45px' }} sx={{ color: red[50] }} onClick={handleShow} />
      <div className="sidebar-container d-flex">
        <Offcanvas style={{ marginLeft: '25vw', width: '260px', background: '#dc2626' }} show={show} onHide={handleClose}>
          <div className="header-sidebar" style={{ height: '15vh' }}>
            <Offcanvas.Header style={{ justifyContent: 'center' }}>
              <Avatar alt="Zemy Sharp" src="/static/images/avatar/1.jpg" />
              <div className="d-flex flex row">
                <div style={{ color: '#f5f5f5', fontSize: 16, fontWeight: 'bolder', justifyContent: 'flex-end', marginLeft: '20px' }}>
                  {currentUser.firstName} {currentUser.lastName}
                </div>

                <div style={{ color: '#f5f5f5', fontSize: 14, marginLeft: '20px' }}>{currentUser.email}</div>
              </div>
            </Offcanvas.Header>
          </div>

          <div className="main-sidebar d-flex flex-column" style={{ height: '75vh' }}>
            <Button
              variant="outline-light"
              style={{ border: '0px' }}
              onClick={(e) => {
                e.preventDefault();
                toHome();
              }}
            >
              <HomeIcon style={{ marginRight: '10px' }} />
              Home
            </Button>{' '}
            <Button
              variant="outline-light"
              style={{ border: '0px' }}
              onClick={(e) => {
                e.preventDefault();
                toEditProfile();
              }}
            >
              <AccountCircleIcon style={{ marginRight: '10px' }} /> Profile
            </Button>{' '}
            <Button
              variant="outline-light"
              style={{ border: '0px' }}
              onClick={(e) => {
                e.preventDefault();
                toFollowing();
              }}
            >
              <GroupIcon style={{ marginRight: '10px' }} /> Following
            </Button>{' '}
            <Button
              variant="outline-light"
              style={{ border: '0px' }}
              onClick={(e) => {
                e.preventDefault();
                toSearchPeople();
              }}
            >
              <PersonAddIcon style={{ marginRight: '10px' }} /> Search People
            </Button>{' '}
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
            </Button>{' '}
          </div>
        </Offcanvas>
      </div>
    </div>
  );
}

export default Sidebar;
