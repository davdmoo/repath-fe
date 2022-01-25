import React, { useState } from 'react';
import { Avatar, Collapse, ListItemButton, ListItemIcon, ListItemText, List } from '@mui/material/';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import moment from 'moment';

function RowListComment(props) {
  return (
    <ListItemButton key={props.rowComment._id} sx={{ ml: '-16px', mt: '-15px', minHeight: '50px' }}>
      <div className=" d-flex flex-row ">
        <div className="comment-section-pict">
          {props.rowComment.userId.imgUrl ? (
            // <Avatar alt={props.props.rowComment.userId.firstName} src={props.props.rowComment.userId.imgUrl} sx={{ margin: '5px' }}></Avatar>
            <Avatar className="avatar-card-textImage" alt={props.rowComment.userId.firstName} src={props.rowComment.userId.imgUrl} sx={{ width: 30, height: 30 }} variant="rounded"></Avatar>
          ) : (
            // <Avatar alt={like.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ margin: '5px' }}></Avatar>
            <Avatar className="avatar-card-textImage" alt={props.rowComment.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} variant="rounded"></Avatar>
          )}
        </div>
        <div className="comment-section-description d-flex justify-content-center ">
          <div className="comment-section-padding">
            <span className="fw-bold">{props.rowComment.userId.firstName}: </span>
            <span style={{ marginBottom: '20px' }}>{props.rowComment.content}</span>

            <div style={{ color: `#9CA3AF`, fontSize: '12px' }}>
              {moment()
                .subtract((moment().valueOf() - moment(props.rowComment.created_at)) / 1000, 's')
                .fromNow()}{' '}
            </div>
          </div>
        </div>
      </div>
    </ListItemButton>
  );
}

export default RowListComment;
