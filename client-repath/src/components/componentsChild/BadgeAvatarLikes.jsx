import React, { useState } from 'react';
import { Avatar, Badge } from '@mui/material/';

function BadgeAvatarLikes(props) {
  console.log(props.like, 'PROPS.LIKE ON BADGE AVATAR LIKES');
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={<Avatar alt="IconLike" src="https://e7.pngegg.com/pngimages/742/937/png-clipart-heart-emoji-emoticon-symbol-broken-heart-love-heart.png" sx={{ width: 22, height: 22, border: `2px solid white` }} />}
    >
      {props.like.userId.imgUrl ? (
        <Avatar alt={props.like.userId.firstName} src={props.like.userId.imgUrl} sx={{ margin: '5px' }}></Avatar>
      ) : (
        <Avatar alt={props.like.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ margin: '5px' }}></Avatar>
      )}
    </Badge>
  );
}

export default BadgeAvatarLikes;
