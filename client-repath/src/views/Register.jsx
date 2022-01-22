import React, { useState, Component } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import { red } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { setRegister } from '../store/actionCreators/userCreator';
import { useNavigate } from 'react-router-dom'

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    city: '',
  });

  const changeRegisterFormInput = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    // console.log('form input<<<<<<');
    setRegisterForm({
      ...registerForm,
      [field]: value,
    });
  };

  const doRegister = () => {
    // console.log('GO TO REGISTER <<<<<<<<<<<<<<<<<<<<<<');
    dispatch(setRegister(registerForm)).then(() => {
      // console.log(setRegister, 'BACK TO REGISTER AFTER RESOLVE <<<<<<<<<<<<<<<<<<<<<<');
      navigate('/login');
    });
  };

  const toLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <div
        style={{
          className: 'container',
          background: '#DC2626',
          flex: 1,
          flexDirection: 'row',
          height: 982,
          width: 640,
        }}
      >
        <div>
          <img
            src="https://ik.imagekit.io/hanakar/Re-Path_D2YBYxVuS2I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490213261"
            style={{
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          ></img>
        </div>
        <div style={{ marginBottom: 20 }}>
          <p
            style={{
              color: '#f5f5f5',
              fontSize: 24,
              fontWeight: 'bolder',
            }}
          >
            Register Account
          </p>
        </div>
        <form
          onSubmit={(el) => {
            el.preventDefault();
            doRegister();
          }}
        >
          <Box
            //   component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              flexDirection: 'column',
              alignSelf: 'center',
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              name="firstName"
              value={registerForm.firstName}
              onChange={changeRegisterFormInput}
              label="first name"
              variant="filled"
              // margin="normal"
              size="small"
              sx={{
                input: {
                  color: red[50],
                },
              }}
            ></TextField>

            <TextField
              name="lastName"
              value={registerForm.lastName}
              onChange={changeRegisterFormInput}
              label="last name"
              variant="filled"
              // margin="normal"
              size="small"
              sx={{
                input: {
                  color: red[50],
                },
              }}
            ></TextField>
            <Box
              // component="form"
              sx={{
                '& > :not(style)': { ml: 11, width: '52ch' },
                flexDirection: 'column',
                alignSelf: 'center',
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                name="username"
                value={registerForm.username}
                onChange={changeRegisterFormInput}
                label="username"
                variant="filled"
                margin="normal"
                size="small"
                sx={{
                  input: {
                    color: red[50],
                  },
                }}
              />
              <TextField
                type="email"
                name="email"
                value={registerForm.email}
                onChange={changeRegisterFormInput}
                label="email"
                variant="filled"
                margin="normal"
                size="small"
                sx={{
                  input: {
                    color: red[50],
                  },
                }}
              />
              <TextField
                name="password"
                value={registerForm.password}
                onChange={changeRegisterFormInput}
                type="password"
                label="password"
                variant="filled"
                margin="normal"
                size="small"
                sx={{
                  input: {
                    color: red[50],
                  },
                }}
              />
              <TextField
                name="phoneNumber"
                value={registerForm.phoneNumber}
                onChange={changeRegisterFormInput}
                label="phone number"
                variant="filled"
                margin="normal"
                size="small"
                sx={{
                  input: {
                    color: red[50],
                  },
                }}
              />
              <TextField
                name="city"
                value={registerForm.city}
                onChange={changeRegisterFormInput}
                label="city"
                variant="filled"
                margin="normal"
                size="small"
                sx={{
                  input: {
                    color: red[50],
                  },
                }}
              />
            </Box>
            <Button
              type='submit'
              value='Submit'
              // onClick={(el) => {
              //   el.preventDefault();
              //   doRegister();
              // }}
              style={{
                backgroundColor: '#FEE2E2',
                color: '#B91C1C',
                fontWeight: 'bold',
                border: '1px',
                borderColor: '#FEE2E2',
                marginTop: '20px',
              }}
            >
              Create Account
            </Button>
          </Box>
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
              Have an account ?
            </p>
          </div>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <Button
             onClick={(e) => {
              e.preventDefault();
              toLogin();
            }}
              variant="outline-light"
              style={{
                backgroundColor: '#DC2626',
                outlineColor: '#ffffff',
                color: '#ffffff',
                fontWeight: 'bold',
                width: 230,
              }}
            >
              Back to Login
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
