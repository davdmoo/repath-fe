import React, { useState, Component } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import NavbarContent from '../components/NavbarContent';
import { addPostTextImage } from '../store/actionCreators/postCreator';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const doPostTextImage = () => {
    console.log(text, selectedFile, type, '<<<<<<<<<<<<<<< SEBELUM MASUK FORM DATA');

    let newPostTextImage = new FormData();
    newPostTextImage.append('type', type);
    newPostTextImage.append('text', text);
    newPostTextImage.append('imgUrl', selectedFile);

    // console.log(newPostTextImage, 'INI FORM DATAAAAA');
    dispatch(addPostTextImage(newPostTextImage)).then(() => {
      console.log('SUCCESS ADD POST AFTER RESOLVE <<<<<<<<<<<<<<<<<<<<<<');
      navigate('/');
    });
  };

  return (
    <>
      <div
        style={{
          flex: 1,
          flexDirection: 'row',
          height: '100vh',
          width: 640,
        }}
      >
        <NavbarContent></NavbarContent>
        <form>
          <Box
            sx={{
              marginTop: 1,
              border: 3,
              borderColor: '#f5f5f5',
              height: '34vh',
              backgroundColor: '#f5f5f5',
            }}
          >
            <TextField id="outlined-multiline-static" multiline fullWidth rows={10} label="Write something here..." name="text" value={text} onChange={changeAddTextImageForm} />
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" name="selectedFile" onChange={toUploadFile} />
              <IconButton color="default" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </Box>
        </form>
        <Stack direction="row" justifyContent="center">
          <Button
            variant="contained"
            color="error"
            style={{
              marginTop: 40,
              width: 200,
            }}
            onClick={(el) => {
              el.preventDefault();
              doPostTextImage();
              // console.log(loginForm);
            }}
          >
            Post
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default PostContent;
