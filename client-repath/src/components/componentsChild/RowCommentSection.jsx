import React, { useState } from 'react';
import { Avatar } from '@mui/material/';
import moment from 'moment';

function RowCommentSection(props) {
  return (
    <div className=" d-flex flex-row ">
      <div className="comment-section-pict">
        {props.rowComment.userId.imgUrl ? (
          // <Avatar alt={props.rowComment.userId.firstName} src={props.rowComment.userId.imgUrl} sx={{ margin: '5px' }}></Avatar>
          <Avatar className="avatar-card-textImage" alt={props.rowComment.userId.firstName} src={props.rowComment.userId.imgUrl} sx={{ width: 30, height: 30 }} variant="rounded"></Avatar>
        ) : (
          // <Avatar alt={props.like.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ margin: '5px' }}></Avatar>
          <Avatar className="avatar-card-textImage" alt={props.rowComment.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} variant="rounded"></Avatar>
        )}
      </div>
      <div className="comment-section-description d-flex justify-content-center ">
        <span className="comment-section-padding" style={{ paddingTop: '2px' }}>
          <span className="fw-bold">{props.rowComment.userId.firstName}: </span>
          {props.rowComment.content}
          <div style={{ color: `#9ca3af` }}>
            {moment()
              .subtract((moment().valueOf() - moment(props.rowComment.created_at)) / 1000, 's')
              .fromNow()}
          </div>
        </span>
      </div>
    </div>
  );
}

export default RowCommentSection;
