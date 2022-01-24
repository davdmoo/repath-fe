import React, { useState, Component } from 'react';
import { LocationOn } from '@mui/icons-material/';
import { red, blue } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import { Card, Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postLocation } from '../store/actionCreators/postCreator';

export default function CardSearchLocation(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toPostLocation = (payload) => {
    dispatch(postLocation(payload)).then(() => {
      navigate('/');
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card
        style={{ border: '0px' }}
        role="button"
        onClick={(e) => {
          e.preventDefault();
          // toPostLocation(props.location);
          handleShow();
        }}
      >
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container-search-location">
            <div style={{ width: '80px' }}>
              <div className="dot-card-search-location">
                <LocationOn sx={{ color: red[50], fontSize: 40 }} />
              </div>
            </div>
            <Stack className=" card-right-side-loc d-flex flex-row align-items-center">
              <div
                className="content-search-location"
                style={{
                  textAlign: 'left',
                  marginLeft: 20,
                }}
              >
                <div className="search-location-city">{props.location.location}</div>
                <div className="search-location-country">{props.location.placeName}</div>
              </div>
            </Stack>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Post your location on <span className="fw-bold"> {props.location.location}</span> to your timeline?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              toPostLocation(props.location);
            }}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
