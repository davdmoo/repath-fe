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
              {props.post.imgUrl ? (
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
                      <Avatar className="avatar-card-textImage" alt="Zemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
                    </div>
                    <div className="postText-description d-flex justify-content-center ">
                      <p className="postText-padding">
                        <span className="fw-bold">Lila: </span>
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
                <CardLikedPost />
                <CardCommentPost />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardTextImage;
