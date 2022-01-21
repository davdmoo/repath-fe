import React, { useState } from 'react';
import { Avatar } from '@mui/material/';

function RowCommentSection(props) {
  console.log(props.rowComment, '<<<<<<<<< INI ROW COMMENT');
  return (
    <div className=" d-flex flex-row ">
      <div className="comment-section-pict">
        <Avatar className="avatar-card-textImage" alt="Andi Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
      </div>
      <div className="comment-section-description d-flex justify-content-center ">
        <p className="comment-section-padding">
          <span className="fw-bold">Andi: </span>Mantap bro.
        </p>
      </div>
    </div>
  );
}

export default RowCommentSection;
