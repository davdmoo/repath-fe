import React, { useState, useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Button, Badge } from 'react-bootstrap';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import ListIcon from '@mui/icons-material/List';
import { red } from '@mui/material/colors';

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <ListIcon style={{ width: '45px', height: '45px' }} sx={{ color: red[50] }} onClick={handleShow} />

      <div className="sidebar-container d-flex">
        <Offcanvas style={{ marginLeft: '350px', width: '260px', background: '#dc2626' }} show={show} onHide={handleClose}>
          <div className="header-sidebar" style={{ height: '15vh' }}>
            <Offcanvas.Header style={{ justifyContent: 'center' }}>
              <Avatar alt="Zemy Sharp" src="/static/images/avatar/1.jpg" />
              <div className="d-flex flex row">
                <text style={{ color: '#f5f5f5', fontSize: 16, fontWeight: 'bolder', justifyContent: 'flex-end', marginLeft: '20px' }}>Username</text>

                <text style={{ color: '#f5f5f5', fontSize: 14, marginLeft: '20px' }}>Email</text>
              </div>
            </Offcanvas.Header>
          </div>

          <div className="main-sidebar d-flex flex-column" style={{ height: '75vh' }}>
            <Button variant="outline-light" style={{ border: '0px' }}>
              <HomeIcon style={{ marginRight: '10px' }} />
              Home
            </Button>{' '}
            <Button variant="outline-light" style={{ border: '0px' }}>
              <AccountCircleIcon style={{ marginRight: '10px' }} /> Profile
            </Button>{' '}
            <Button variant="outline-light" style={{ border: '0px' }}>
              <GroupIcon style={{ marginRight: '10px' }} /> Friend List
            </Button>{' '}
            <Button variant="outline-light" style={{ border: '0px' }}>
              <PersonAddIcon style={{ marginRight: '10px' }} /> Add Friend
            </Button>{' '}
          </div>
          <div className="footer-sidebar d-flex flex-column" style={{ height: '10vh' }}>
            <Button variant="outline-light" style={{ border: '0px' }}>
              <LogoutIcon style={{ marginRight: '10px' }} /> Sign Out
            </Button>{' '}
          </div>

          {/* <Button variant="outline-light" style={{ border: '0px', marginTop: '5px' }}>
                    <HomeIcon style={{ marginRight: '10px' }} />Home</Button>{' '}
                <Button variant="outline-light" style={{ border: '0px', marginTop: '100px' }}>
                    <AccountCircleIcon style={{ marginRight: '10px' }} /> Profile</Button>{' '}
                <Button variant="outline-light" style={{ border: '0px', marginTop: '10px' }}>
                    <GroupIcon style={{ marginRight: '10px' }} /> Friend List</Button>{' '}
                <Button variant="outline-light" style={{ border: '0px', marginTop: '10px' }}>
                    <PersonAddIcon style={{ marginRight: '10px' }} /> Add Friend</Button>{' '}
                <Button variant="outline-light" style={{ border: '0px', marginTop: '280px' }}>
                    <LogoutIcon style={{ marginRight: '10px' }} /> Sign Out</Button>{' '} */}

        </Offcanvas>
      </div>
    </div>
  );
}

export default Sidebar;
