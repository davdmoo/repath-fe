import React, { useState, Component } from 'react';
import { Avatar } from '@mui/material/';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postMusic } from '../store/actionCreators/postCreator';

export default function CardSearchMusic(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toPostMusic = (payload) => {
    console.log(payload, '<<<<<<<<<<< INI HASIL POST');
    dispatch(postMusic(payload)).then(() => {
      navigate('/');
    });
  };

  return (
    <Card
      style={{ border: '0px' }}
      role="button"
      onClick={(e) => {
        e.preventDefault();
        toPostMusic({ ...props.music, type: 'music' });
      }}
    >
      <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
        <div className="card-container-search-music">
          <div className="card-left-side-search-music d-flex">
            <Avatar className="avatar-card" alt="BrunoMars" src={props.music.imageAlbum} sx={{ width: 75, height: 75 }} variant="rounded"></Avatar>
          </div>
          <div className="card-right-side d-flex flex-row align-items-center">
            <div className="content-search-music" style={{ width: '250px', textAlign: 'left' }}>
              <div className="search-music-title">{props.music.title}</div>
              <div className="search-music-artist">{props.music.artist}</div>
              <div className="search-music-albums">{props.music.albumName}</div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
