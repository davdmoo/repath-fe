import React, { useState } from 'react';
import { Avatar } from '@mui/material/';

function RowCommentSection(props) {
  console.log(props.rowComment, '<<<<<<<<< INI ROW COMMENT');
  return (
    <div className=" d-flex flex-row ">
      <div className="comment-section-pict">
        {props.rowComment.userId.imgUrl ? (
          // <Avatar alt={props.rowComment.userId.firstName} src={props.rowComment.userId.imgUrl} sx={{ margin: '5px' }}></Avatar>
          <Avatar className="avatar-card-textImage" alt={props.rowComment.userId.firstName} src={props.rowComment.userId.imgUrl} sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
        ) : (
          // <Avatar alt={props.like.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ margin: '5px' }}></Avatar>
          <Avatar className="avatar-card-textImage" alt={props.rowComment.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
        )}
      </div>
      <div className="comment-section-description d-flex justify-content-center ">
        <p className="comment-section-padding">
          <span className="fw-bold">{props.rowComment.userId.firstName}: </span>
          {props.rowComment.content}
        </p>
      </div>
    </div>
  );
}

export default RowCommentSection;
