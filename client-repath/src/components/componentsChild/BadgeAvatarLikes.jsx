import React, { useState } from 'react';
import { Avatar, Badge } from '@mui/material/';

function BadgeAvatarLikes() {
  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={<Avatar alt="Remy Sharp" src="https://e7.pngegg.com/pngimages/742/937/png-clipart-heart-emoji-emoticon-symbol-broken-heart-love-heart.png" sx={{ width: 22, height: 22, border: `2px solid white` }} />}
    >
      <Avatar alt="Pevita" src="https://thumb.viva.co.id/media/frontend/thumbs3/2019/08/30/5d6921ffde509-pevita-pearce_665_374.jpg" sx={{ margin: '5px' }} />
    </Badge>
  );
}

export default BadgeAvatarLikes;
