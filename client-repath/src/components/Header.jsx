import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';

function Header(props) {
  return (
    <>
      <div className="header pt-5">
        <div
          style={{
            height: '250px',
            backgroundImage: props.currentUser.header
              ? `url(${props.currentUser.header})`
              : `url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')`,
            // backgroundImage: "url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#f87171',
          }}
        >
          <div style={{ paddingTop: '115px', paddingLeft: '93px' }}>
            {props.currentUser.imgUrl ? (
              <Avatar alt={props.currentUser.firstName} src={props.currentUser.imgUrl} sx={{ width: 85, height: 85, fontSize: 40 }}></Avatar>
            ) : (
              <Avatar alt={props.currentUser.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 85, height: 85, fontSize: 40 }}></Avatar>
            )}
            {/* <Avatar alt="Zemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 70, height: 70 }} /> */}
          </div>

          <span className="dot-header"></span>
          <div className="vl-header"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
