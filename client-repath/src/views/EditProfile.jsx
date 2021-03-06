import React, { useState, useEffect } from 'react';
import NavbarContent from '../components/NavbarContent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IconButton, Input, styled } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import { red } from '@mui/material/colors';
import { setEditUser } from '../store/actionCreators/userCreator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserById } from '../store/actionCreators/userCreator';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { byteFormatter } from '../hooks/byteFormatter';
import { warnToastAlert } from '../hooks/errorToastAlert';
import { ToastContainer, toast } from 'react-toastify';
import { red, deepOrange } from '@mui/material/colors';

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
    header: '',
  });

  const [selectedFile, setSelectedFile] = useState({});

  useEffect(() => {
    dispatch(fetchUserById(localStorage.id)).then(({ data }) => {
      setEditUserForm({
        firstName: data.firstName,
        lastName: data.lastName,
        imgUrl: data.imgUrl,
        username: data.username,
        phoneNumber: data.phoneNumber,
        city: data.city,
        header: data.header,
      });
    });
  }, [dispatch]);

  const changeEditUserInput = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    setEditUserForm({
      ...editUserForm,
      [field]: value,
    });
  };

  const doEditUser = () => {
    let newEditUser = new FormData();
    newEditUser.append('firstName', editUserForm.firstName);
    newEditUser.append('lastName', editUserForm.lastName);
    newEditUser.append('username', editUserForm.username);
    newEditUser.append('phoneNumber', editUserForm.phoneNumber);
    newEditUser.append('city', editUserForm.city);
    if(editUserForm.header) newEditUser.append('header', editUserForm.header);
    else newEditUser.append('header', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80');
    newEditUser.append('imgUrl', selectedFile);

    dispatch(setEditUser(newEditUser))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        if (err.response.data.message == 'Please input required fields on edit form') warnToastAlert('Please fill all input', 'top-center', 3000, true);
        else if (err.response.data.message == `Maximum file size is 300kb`) warnToastAlert('Maximum size for Profile Picture is 300kb', 'top-center', 3000, true);
      });
  };

  const toUploadFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const { afterPostUser } = useSelector((state) => state.userReducer);

  const Input = styled('input')({
    display: 'none',
  });

  const fileDataExist = () => {
    if (selectedFile.name) {
      return (
        <div className="mt-3">
          <h5 className="mx-5">Changing your profile picture to</h5>
          <h5 className="mx-5">
            {selectedFile.name} ({byteFormatter(selectedFile.size, 2)})
          </h5>
        </div>
      );
    } else {
      return (
        <div>
          {editUserForm.imgUrl ? (
            <Avatar
              className="avatar-card"
              alt={editUserForm.firstName}
              src={editUserForm.imgUrl}
              sx={{
                fontSize: 50,
                mt: 2,
                width: 100,
                height: 100,
                mx: 'auto',
              }}
            ></Avatar>
          ) : (
            <Avatar
              className="avatar-card"
              alt={editUserForm.firstName}
              src="/static/images/avatar/1.jpg"
              sx={{
                fontSize: 50,
                mt: 2,
                width: 100,
                height: 100,
                mx: 'auto',
              }}
            ></Avatar>
          )}
        </div>
      );
    }
  };

  return (
    <>
      <ToastContainer theme="colored" />
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
            {fileDataExist()}

            <div>
              <label htmlFor="icon-button-file">
                <Input sx={{ marginTop: '10px' }} accept="image/*" id="icon-button-file" type="file" name="selectedFile" onChange={toUploadFile} />
                <IconButton color="default" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </div>
          </div>

          <Stack
            spacing={1}
            direction="column"
            className="edit-profile-field"
            style={{
              marginTop: '0px',
              height: '60vh',
            }}
          >
            <Box
              sx={{
                '& > :not(style)': { m: 0.5, width: '15ch' },
                flexDirection: 'column',
                alignSelf: 'center',
              }}
              noValidate
              autoComplete="off"
            >
              <TextField value={editUserForm.firstName} sx={{ backgroundColor: `#fee2e2` }} error onChange={changeEditUserInput} name="firstName" label="First Name" variant="filled" size="small"></TextField>

              <TextField value={editUserForm.lastName} sx={{ backgroundColor: `#fee2e2` }} error onChange={changeEditUserInput} name="lastName" label="Last Name" variant="filled" size="small"></TextField>
              <Box
                sx={{
                  '& > :not(style)': { width: '32ch' },
                  flexDirection: 'column',
                  alignSelf: 'center',
                }}
                noValidate
                autoComplete="off"
              >
                <TextField value={editUserForm.header} sx={{ backgroundColor: `#fee2e2` }} error onChange={changeEditUserInput} name="header" label="Image for Header (URL)" variant="filled" margin="normal" size="small"></TextField>
                {/* <TextField 
								value={editUserForm.imgUrl}
								onChange={changeEditUserInput}
								name="headerUrl" label="header background url" variant="filled" margin="normal" size="small"></TextField> */}
                <TextField value={editUserForm.username} sx={{ backgroundColor: `#fee2e2` }} error onChange={changeEditUserInput} name="username" label="username" variant="filled" margin="normal" size="small" />
                <TextField value={editUserForm.phoneNumber} sx={{ backgroundColor: `#fee2e2` }} error onChange={changeEditUserInput} name="phoneNumber" label="phone number" variant="filled" margin="normal" size="small" />
                <TextField value={editUserForm.city} sx={{ backgroundColor: `#fee2e2` }} error onChange={changeEditUserInput} name="city" label="city" variant="filled" margin="normal" size="small" />
              </Box>
              <Button
                type="button"
                variant="contained"
                color="error"
                style={{
                  width: 200,
                }}
                onClick={(el) => {
                  el.preventDefault();
                  doEditUser();
                }}
              >
                Edit
              </Button>
            </Box>
          </Stack>
        </Stack>
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

export default EditProfile;
