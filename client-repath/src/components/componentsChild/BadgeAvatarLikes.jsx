import React, { useState } from 'react';
import { Avatar, Badge } from '@mui/material/';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function BadgeAvatarLikes(props) {
  const renderTooltip = (prop) => (
    <Tooltip id="button-tooltip" {...prop}>
      <div>
        {props.like.userId.firstName} {props.like.userId.lastName}
      </div>
    </Tooltip>
  );
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={<Avatar alt="IconLike" src="https://e7.pngegg.com/pngimages/742/937/png-clipart-heart-emoji-emoticon-symbol-broken-heart-love-heart.png" sx={{ width: 16, height: 16, border: `2px solid white` }} />}
    >
      {props.like.userId.imgUrl ? (
        <OverlayTrigger placement="top" overlay={renderTooltip}>
          <Avatar alt={props.like.userId.firstName} src={props.like.userId.imgUrl} sx={{ margin: '5px', width: 30, height: 30 }}></Avatar>
        </OverlayTrigger>
      ) : (
        <OverlayTrigger placement="top" overlay={renderTooltip}>
          <Avatar alt={props.like.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ margin: '5px', width: 30, height: 30 }}></Avatar>
        </OverlayTrigger>
      )}
    </Badge>
  );
}

export default BadgeAvatarLikes;
