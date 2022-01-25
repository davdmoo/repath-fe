import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import {setGoogleLogin} from '../store/actionCreators/userCreator'

function TestGoogle() {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    console.log(response);
    dispatch(setGoogleLogin(response));
  };
  

  return (
    <>
      <h1>COBA COBA GOOGLE LOGIN</h1>
      <GoogleLogin clientId="306277501455-3tep6b17k5avj734itbeqju5g6asoind.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
    </>
  );
}

export default TestGoogle;