import React, { useState, Component } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import NavbarContent from '../components/NavbarContent';
import { addPostTextImage } from '../store/actionCreators/postCreator';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import LittleLoader from '../components/componentsChild/LittleLoader';
import { byteFormatter } from '../hooks/byteFormatter';
import { errorToastAlert } from '../hooks/errorToastAlert';

const Input = styled('input')({
  display: 'none',
});

function PostContent() {
  const [type, setType] = useState('text');
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState({});

  const changeAddTextImageForm = (e) => {
    setText(e.target.value);
  };

  const toUploadFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const fileData = () => {
    if (selectedFile.name) {
      return (
        <div>
          <h2>Image Details:</h2>
          <p style={{ margin: '0px 25px' }}>Image Name: {selectedFile.name}</p>
          <p style={{ margin: '0px' }}>File Type: {selectedFile.type}</p>
          <p style={{ marginBottom: '0px' }}>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
          <p style={{ marginBottom: '10px' }}>Size: {byteFormatter(selectedFile.size, 2)}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h4>Press camera icon to choose your image file.</h4>
        </div>
      );
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doPostTextImage = () => {
    // console.log(text, selectedFile, type, '<<<<<<<<<<<<<<< SEBELUM MASUK FORM DATA');

    let newPostTextImage = new FormData();
    newPostTextImage.append('type', type);
    newPostTextImage.append('text', text);
    newPostTextImage.append('imgUrl', selectedFile);

    dispatch(addPostTextImage(newPostTextImage))
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        if (err.message == 'Please fill all input fields') errorToastAlert('Please fill text input');
        else errorToastAlert(err.message);
      });
  };

  const { afterPostLoading } = useSelector((state) => state.postReducer);

  return (
    <>
      <div>
        <ToastContainer theme="colored" />
      </div>
      <div
        style={{
          flex: 1,
          flexDirection: 'row',
          height: '100vh',
          width: '100vw',
        }}
      >
        <NavbarContent></NavbarContent>
        <form>
          <Box
            sx={{
              marginTop: 1,
              border: 3,
              borderColor: '#fef2f2',
              height: '34vh',
              backgroundColor: '#fef2f2',
            }}
          >
            <TextField id="outlined-multiline-static" multiline fullWidth rows={10} label="Write something here..." name="text" value={text} onChange={changeAddTextImageForm} />
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" name="selectedFile" onChange={toUploadFile} />
              <IconButton color="default" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            {fileData()}
            <Button
              variant="contained"
              color="error"
              style={{
                marginTop: 10,
                width: 200,
              }}
              onClick={(el) => {
                el.preventDefault();
                doPostTextImage();
              }}
            >
              Post
            </Button>

            {afterPostLoading ? (
              <div>
                <LittleLoader />
              </div>
            ) : (
              <div></div>
            )}
          </Box>
        </form>
      </div>
    </>
  );
}

export default PostContent;
