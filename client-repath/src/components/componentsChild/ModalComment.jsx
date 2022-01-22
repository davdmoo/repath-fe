import React, { useState } from 'react';
import { IconButton, TextField, Button } from '@mui/material/';
import { Modal } from 'react-bootstrap';
import { Comment, Send } from '@mui/icons-material/';
import { blue } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../store/actionCreators/postCreator';

function ModalComment({ post }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [content, setContent] = useState('');

  function handleComment(e) {
    e.preventDefault();
    const commentPayload = {
      id: post._id,
      content,
    };
    dispatch(commentPost(commentPayload)).then(() => {
      setShow(false);
    });
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  return (
    <>
      <IconButton onClick={handleShow} sx={{ padding: '0px 3px' }}>
        <Comment sx={{ color: blue[500] }} />
      </IconButton>
      {/* ======================================== MODAL ========================================*/}
      <Modal show={show} onHide={handleClose} centered size="md">
        <form onSubmit={handleComment}>
          <Modal.Header closeButton>
            <Modal.Title>Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextField value={content} onChange={handleContent} fullWidth id="standard-basic" label="Standard" variant="standard" />
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="contained" endIcon={<Send />}>
              Post
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalComment;
