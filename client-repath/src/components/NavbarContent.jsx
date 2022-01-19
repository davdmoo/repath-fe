import React, { useState, Component } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function NavbarContent() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-3 d-flex flex-row">
      <Stack direction="row" spacing={'197px'}>
        <IconButton
          style={{
            marginTop: 10,
            width: 50,
            height: 50,
          }}
        >
          <ArrowBackOutlinedIcon />
        </IconButton>
        <div
          style={{
            justifyItems: 'center',
            height: '80px',
            width: '110px',
            backgroundImage: "url('https://ik.imagekit.io/hanakar/Re-Path_D2YBYxVuS2I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490213261')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </Stack>
    </nav>
  );

}
