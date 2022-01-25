import React, { useState, Component } from 'react';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';
import { setLogin } from '../store/actionCreators/userCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { errorToastAlert } from '../hooks/errorToastAlert';
import { ToastContainer, toast } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { alpha, styled } from '@mui/material/styles';

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: red[50],
    },
    '& .MuiInput-underline:before': {
      borderColor: red[50],
      color: red[50],
    },
    '& .MuiInput-underline:after': {
      borderColor: red[50],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: red[50],
      },
      '&:hover fieldset': {
        borderColor: red[50],
      },
      '&.Mui-focused fieldset': {
        borderColor: red[50],
      },
    },
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
    dispatch(setLogin(loginForm))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        // console.log(err.message, 'error from login>>>>>>>>>');
        if (err.message) errorToastAlert(err.message);
      });
  };

  const toRegister = () => {
    navigate('/register');
  };

  const { afterPostUser } = useSelector((state) => state.userReducer);

  return (
    <>
      <div>
        <ToastContainer
          style={{
            fontWeight: 'bold',
            marginBottom: '40vh',
          }}
          theme="light"
        />
      </div>
      <div
        style={{
          background: '#DC2626',
          flex: 1,
          flexDirection: 'row',
          height: '150vh',
          width: '390px',
        }}
      >
        <div>
          <img
            src="https://ik.imagekit.io/hanakar/Re-Path_D2YBYxVuS2I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642490213261"
            style={{
              marginTop: 50,
              height: 200,
              width: 200,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
          ></img>
        </div>
        <div style={{ marginBottom: 50 }}>
          <h5
            style={{
              color: '#f5f5f5',
            }}
          >
            Share your wonderful moments with us
          </h5>
        </div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '37ch', mb: 3 },
            defaultValue: {
              color: red[50],
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            type="email"
            name="email"
            value={loginForm.email}
            onChange={changeLoginFormInput}
            label="Email"
            margin="normal"
            sx={{
              input: {
                color: red[50],
              },
            }}
            focused
          ></TextField>

          {/* <CssTextField variant="standard" label="Testing" sx={{ color: red[50] }} /> */}

          <TextField
            name="password"
            value={loginForm.password}
            onChange={changeLoginFormInput}
            type="password"
            label="Password"
            placehorder="AAAAA"
            focused
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
      {afterPostUser ? (
        <div>
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <CircularProgress color="inherit" />
              <p>Please wait...</p>
            </div>
          </Backdrop>
        </div>
      ) : (
        <div>
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={false}>
            <div className="d-flex ">
              <CircularProgress color="inherit" />
              <p>Please wait...</p>
            </div>
          </Backdrop>
        </div>
      )}
    </>
  );
}

export default Login;
