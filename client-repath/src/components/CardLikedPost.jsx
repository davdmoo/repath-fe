import React, { useState } from 'react';
import BadgeAvatarLikes from './componentsChild/BadgeAvatarLikes';

function CardLikedPost() {
  return (
    <div className="likes-section d-flex flex-row shadow flex-wrap ">
      <BadgeAvatarLikes />
      <BadgeAvatarLikes />
    </div>
  );
}

export default CardLikedPost;
