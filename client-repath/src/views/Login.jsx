import React, { useState, Component } from 'react';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';
import { setLogin } from '../store/actionCreators/userCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const changeLoginFormInput = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setLoginForm({
      ...loginForm,
      [field]: value,
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const doLogin = () => {
    // console.log('GO TO LOGIN <<<<<<<<<<<<<<<<<<<<<<');
    dispatch(setLogin(loginForm)).then(() => {
      navigate('/');
    });
    //   .catch((err) => {
    // 	console.log(err);
    // 	if (err == 'Error: Bad Request') {
    // 	  errorAlert(err, 'Please input field data');
    // 	} else {
    // 	  errorAlert(err, 'Invalid email/password');
    // 	}
    //   });
  };

  const toRegister = () => {
    navigate('/register');
  };

  return (
    <>
      <div
        style={{
          background: '#DC2626',
          flex: 1,
          flexDirection: 'row',
          height: '100vh',
          width: 640,
        }}
      >
        <div>
          <img
            src="https://ik.imagekit.io/hanakar/Re-Path_D2YBYxVuS2I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490213261"
            style={{
              marginTop: 100,
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          ></img>
        </div>
        <div style={{ marginBottom: 50 }}>
          <p
            style={{
              color: '#f5f5f5',
            }}
          >
            Share your wonderful moments with us
          </p>
        </div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '52ch', mb: 3 },
            defaultValue: {
              color: red[50],
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="email"
            value={loginForm.email}
            onChange={changeLoginFormInput}
            label="email"
            variant="filled"
            margin="normal"
            sx={{
              input: {
                color: red[50],
              },
            }}
          ></TextField>

          <TextField
            name="password"
            value={loginForm.password}
            onChange={changeLoginFormInput}
            type="password"
            label="password"
            variant="filled"
            margin="normal"
            sx={{
              input: {
                color: red[50],
              },
            }}
          />
        </Box>
        <Button
          style={{
            backgroundColor: '#FEE2E2',
            color: '#B91C1C',
            fontWeight: 'bold',
            border: '1px solid blue',
            borderColor: '#FEE2E2',
            width: 230,
          }}
          type="submit"
          value="Submit"
          onClick={(el) => {
            el.preventDefault();
            doLogin();
          }}
        >
          Login
        </Button>
        <div
          style={{
            marginTop: 10,
          }}
        >
          <p
            style={{
              color: '#f5f5f5',
              fontWeight: 'bold',
            }}
          >
            Doesn’t have an account yet ?
          </p>
        </div>
        <div
          style={{
            marginTop: 20,
          }}
        >
          <Button
            variant="outline-light"
            onClick={(el) => {
              el.preventDefault();
              toRegister();
            }}
            style={{
              backgroundColor: '#DC2626',
              outlineColor: '#ffffff',
              color: '#ffffff',
              fontWeight: 'bold',
              width: 230,
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </>
  );
}

export default Login;
