import React, { useState } from 'react';
import { Avatar } from '@mui/material/';
import RowCommentSection from './componentsChild/RowCommentSection';

function CardCommentPost() {
  return (
    <div className="comment-card-container d-flex flex-column shadow">
      <RowCommentSection />
      <RowCommentSection />
    </div>
  );
}

export default CardCommentPost;
