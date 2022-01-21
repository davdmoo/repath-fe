import React, { useState } from 'react';
import RowCommentSection from './componentsChild/RowCommentSection';
import { Avatar } from '@mui/material/';

function CardCommentPost(props) {
  console.log(props.comment, 'PROPS.COMMENT ON COMMENT <<<<<<<<<<<<<');
  return (
    <div className="comment-card-container d-flex flex-column shadow">
      {/* {props.comment.map((rowComment) => {
        return <RowCommentSection key={rowComment._id} rowComment={rowComment} />;
      })} */}
      {/* <RowCommentSection key={props.comment._id} rowComment={props.comment}/> */}
      <div className=" d-flex flex-row ">
        <div className="comment-section-pict">
          {props.comment.userId.firstName.imgUrl ? (
            <Avatar className="avatar-card-textImage" alt={props.comment.userId.firstName} src={props.comment.userId.imgUrl} sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
          ) : (
            <Avatar className="avatar-card-textImage" alt={props.comment.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
          )}
        </div>
        <div className="comment-section-description d-flex justify-content-center ">
          <p className="comment-section-padding">
            <span className="fw-bold">{props.comment.userId.firstName}: </span>
            {props.comment.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardCommentPost;
