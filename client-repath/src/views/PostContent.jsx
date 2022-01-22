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
import { ToastContainer, toast } from 'react-toastify';

const Input = styled('input')({
  display: 'none',
});

function PostContent() {
  const notify = () => toast('Wow so easy!');
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
          <p style={{ margin: '0px' }}>Image Name: {selectedFile.name}</p>
          <p style={{ margin: '0px' }}>File Type: {selectedFile.type}</p>
          <p style={{ marginBottom: '10px' }}>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
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
        console.log('SUCCESS ADD POST AFTER RESOLVE <<<<<<<<<<<<<<<<<<<<<<');
        navigate('/');
      })
      .catch((err) => {
        toast.error('Please input text field and file type must be image with maximum size 3MB', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(err, 'error di wawwwwwwwww');
      });
  };

  // toast.promise(doPostTextImage, {
  //   pending: 'Promise is pending',
  //   success: 'Promise resolved 👌',
  //   error: 'Promise rejected 🤯',
  // });

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
          width: 640,
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
          </Box>
        </form>
        {/* <Stack direction="row" justifyContent="center"> */}

        {/* </Stack> */}
      </div>
    </>
  );
}

export default PostContent;
