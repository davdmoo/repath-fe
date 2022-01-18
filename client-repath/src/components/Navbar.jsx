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
      <a className="navbar-brand" href="#">
        <img src="https://ik.imagekit.io/hanakar/Re-Path_D2YBYxVuS2I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490213261" height="100px" width="120px" style={{ marginLeft: '200px' }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
      </div>
    </nav>
  );
}

export default Navbar;
