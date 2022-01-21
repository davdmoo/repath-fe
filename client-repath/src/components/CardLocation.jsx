import React, { useState } from 'react';
import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, LocationOn, Delete } from '@mui/icons-material/';
import { red, blue } from '@mui/material/colors';
import { Card } from 'react-bootstrap';
import CardLikedPost from './CardLikedPost';
import CardCommentPost from './CardCommentPost';
import ModalComment from './componentsChild/ModalComment';

function CardLocation(props) {
  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container">
            <div className="card-left-side d-flex">
              {props.post.userId.imgUrl ? (
                <Avatar className="avatar-card" alt="David" src={props.post.userId.imgUrl} sx={{ width: 50, height: 50 }} variant="rounded"></Avatar>
              ) : (
                <Avatar className="avatar-card" alt={props.post.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} variant="rounded"></Avatar>
              )}
              <div>
                <span className="dot-card-location">
                  <LocationOn sx={{ color: red[50] }} />
                </span>
              </div>
            </div>
            <div className="card-right-side d-flex flex-row">
              <div className="content-text" style={{ width: '250px', textAlign: 'left' }}>
                <div className="location-title">
                  Arrived in <span className="fw-bold">{props.post.location}</span>
                </div>
                {props.post.likes.length > 0 ? <CardLikedPost key={props.post._id} likes={props.post.likes} /> : <div></div>}
                {props.post.comments.length > 0 ? <CardCommentPost key={props.post._id} comments={props.post.comments} /> : <div></div>}
                {/* {props.post.comments.length > 0 ? (
                  props.post.comments.map((comment) => {
                    return <CardCommentPost key={comment._id} comment={comment} />;
                  })
                ) : (
                  <div></div>
                )} */}
              </div>
              <div className="content-location d-flex flex-row" style={{ width: '200px' }}>
                <div style={{ paddingTop: '3px' }}>
                  <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} />
                </div>
                <div style={{ paddingTop: '5px' }}>
                  <ModalComment />
                </div>
                <div style={{ paddingTop: '5px' }}>
                  <IconButton>
                    <Delete sx={{ color: red[500] }} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardLocation;
