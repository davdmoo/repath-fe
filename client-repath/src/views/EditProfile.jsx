import React, { useState, Component } from 'react';
import NavbarContent from '../components/NavbarContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import { setEditUser } from '../store/actionCreators/userCreator';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editUserForm, setEditUserForm] = useState({
    firstName: '',
    lastName: '',
    imgUrl: '',
    username: '',
    phoneNumber: '',
    city: '',
  });

  const changeEditUserInput = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setEditUserForm({
      ...editUserForm,
      [field]: value,
    });
  };

  const doEditUser = () => {
    console.log(editUserForm, 'editUserForm<<<<<<<<<<<');
    dispatch(setEditUser(editUserForm)).then(() => {
      navigate('/');
    });
  };

  return (
    <>
      <div
        style={{
          height: '100vh',
        }}
      >
        <NavbarContent />
        <Stack spacing={1} className="edit-profile-container">
          <div
            className="edit-profile-picture"
            style={{
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{
                mt: 5,
                width: 100,
                height: 100,
                mx: 'auto',
              }}
            />
          </div>
          <form
            onSubmit={(el) => {
              el.preventDefault();
              doEditUser();
            }}
          >
            <Stack
              spacing={1}
              direction="column"
              className="edit-profile-field"
              style={{
                marginTop: '20px',
                height: '60vh',
              }}
            >
              <Box
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                  flexDirection: 'column',
                  alignSelf: 'center',
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  // value={editUserForm.firstName}
                  onChange={changeEditUserInput}
                  name="firstName"
                  label="first name"
                  variant="filled"
                  size="small"
                ></TextField>

                <TextField
                  // value={editUserForm.lastName}
                  onChange={changeEditUserInput}
                  name="lastName"
                  label="last name"
                  variant="filled"
                  size="small"
                ></TextField>
                <Box
                  sx={{
                    '& > :not(style)': { width: '52ch' },
                    flexDirection: 'column',
                    alignSelf: 'center',
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    // value={editUserForm.imgUrl}
                    onChange={changeEditUserInput}
                    name="imgUrl"
                    label="profile picture url"
                    variant="filled"
                    margin="normal"
                    size="small"
                  ></TextField>
                  {/* <TextField 
								value={editUserForm.imgUrl}
								onChange={changeEditUserInput}
								name="headerUrl" label="header background url" variant="filled" margin="normal" size="small"></TextField> */}
                  <TextField
                    // value={editUserForm.username}
                    onChange={changeEditUserInput}
                    name="username"
                    label="username"
                    variant="filled"
                    margin="normal"
                    size="small"
                  />
                  <TextField
                    // value={editUserForm.phoneNumber}
                    onChange={changeEditUserInput}
                    name="phoneNumber"
                    label="phone number"
                    variant="filled"
                    margin="normal"
                    size="small"
                  />
                  <TextField
                    // value={editUserForm.city}
                    onChange={changeEditUserInput}
                    name="city"
                    label="city"
                    variant="filled"
                    margin="normal"
                    size="small"
                  />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  style={{
                    width: 200,
                  }}
                >
                  Edit
                </Button>
              </Box>
            </Stack>
          </form>
        </Stack>
      </div>
    </>
  );
}

export default EditProfile;
