import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <>
      <div className="header pt-5">
        <div
          style={{
            height: '250px',
            backgroundImage: "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div style={{ paddingTop: '130px', paddingLeft: '100px' }}>
            <Avatar alt="Zemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 70, height: 70 }} />
          </div>
          <span className="dot-header"></span>
          <div class="vl-header"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
