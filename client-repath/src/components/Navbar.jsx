import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

function Navbar() {
  const navigate = useNavigate();

  const toLogout = () => {
    // localStorage.clear();
    // navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5">
      <Sidebar></Sidebar>
      <div
        style={{
          marginLeft: '170px',
          height: '80px',
          width: '110px',
          backgroundImage: "url('https://ik.imagekit.io/hanakar/Re-Path_D2YBYxVuS2I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490213261')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </nav>
  );
}

export default Navbar;
