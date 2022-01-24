import React, { useState, Component } from 'react';
import { Avatar } from '@mui/material/';
import { Card, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postMusic } from '../store/actionCreators/postCreator';

export default function CardSearchMusic(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toPostMusic = (payload) => {
    dispatch(postMusic(payload)).then(() => {
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
          handleShow();
          // toPostMusic({ ...props.music, type: 'music' });
        }}
      >
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container-search-music">
            <div className="card-left-side-search-music d-flex">
              <Avatar className="avatar-card" alt="BrunoMars" src={props.music.imageAlbum} sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
            </div>
            <div className="card-right-side-music-search d-flex flex-row align-items-center">
              <div className="content-search-music">
                <div className="search-music-title">{props.music.title}</div>
                <div className="search-music-artist">{props.music.artist}</div>
                <div className="search-music-albums">{props.music.albumName}</div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Post <span className="fw-bold"> {props.music.title}</span> by {props.music.artist} to your timeline?
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
              toPostMusic({ ...props.music, type: 'music' });
            }}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
