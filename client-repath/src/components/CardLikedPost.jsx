import React, { useState } from 'react';
import BadgeAvatarLikes from './componentsChild/BadgeAvatarLikes';

function CardLikedPost(props) {
  console.log(props.likes, 'PROPS.LIKES ON LIKED CARD<<<<<<<<<<<<<');
  return (
    <div className="likes-section d-flex flex-row shadow flex-wrap ">
      {props.likes.map((like) => {
        return <BadgeAvatarLikes key={like._id} like={like} />;
      })}
    </div>
  );
}

export default CardLikedPost;
