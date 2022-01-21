import React, { useState } from 'react';
import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, Delete, FormatQuote } from '@mui/icons-material/';
import { red, blue } from '@mui/material/colors';
import { Card } from 'react-bootstrap';
import CardLikedPost from './CardLikedPost';
import CardCommentPost from './CardCommentPost';
import ModalComment from './componentsChild/ModalComment';

function CardTextImage(props) {
  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container">
            <div className="card-left-side d-flex">
              <div>
                <span className="dot-card-textImage">
                  <FormatQuote sx={{ color: red[50] }} />
                </span>
              </div>
            </div>
            <div className="card-right-side d-flex flex-column">
              {props.post.imgUrl !== '[object Object]' ? (
                <div
                  style={{
                    height: '250px',
                    backgroundImage: `url(${props.post.imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginRight: '20px',
                  }}
                ></div>
              ) : (
                <div></div>
              )}
              <div className="content-section-wrapper d-flex flex-column">
                <div className="content-text d-flex flex-row">
                  <div className="postText-container d-flex flex-row">
                    <div className="comment-section-pict">
                      {props.post.userId.imgUrl ? (
                        <Avatar className="avatar-card-textImage" alt={props.post.userId.firstName} src={props.post.userId.imgUrl} sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
                      ) : (
                        <Avatar className="avatar-card-textImage" alt={props.post.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
                      )}
                    </div>
                    <div className="postText-description d-flex justify-content-center ">
                      <p className="postText-padding">
                        <span className="fw-bold">{props.post.userId.firstName}: </span>
                        {props.post.text}
                      </p>
                    </div>
                  </div>
                  <div className="content-text-button d-flex flex-row justify-content-center">
                    <div style={{ marginTop: '8px' }}>
                      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      <ModalComment />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      <IconButton>
                        <Delete sx={{ color: red[500] }} />
                      </IconButton>
                    </div>
                  </div>
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
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardTextImage;
