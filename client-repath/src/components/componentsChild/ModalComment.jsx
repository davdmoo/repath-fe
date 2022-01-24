import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material/';
import { Modal, Form, Button } from 'react-bootstrap';
import { Comment, Send } from '@mui/icons-material/';
import { blue } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { commentPost } from '../../store/actionCreators/postCreator';

function ModalComment({ post }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [content, setContent] = useState('');

  function handleComment() {
    // e.preventDefault();
    const commentPayload = {
      id: post._id,
      content,
    };
    dispatch(commentPost(commentPayload)).then(() => {
      setShow(false);
      setContent('');
    });
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  const { afterClickPostLoading } = useSelector((state) => state.postReducer);

  return (
    <>
      {/* <Button variant="outline-primary" onClick={handleShow}>
        Primary
      </Button> */}
      <IconButton onClick={handleShow} sx={{ padding: '0px 1px' }}>
        <Comment sx={{ color: blue[500], fontSize: 16 }} />
      </IconButton>
      {/* ======================================== MODAL ========================================*/}
      <Modal show={show} onHide={handleClose} centered size="sm">
        {/* <form> */}
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <TextField value={content} onChange={handleContent} fullWidth id="standard-basic" label="Standard" variant="standard" /> */}
          <Form.Control value={content} onChange={handleContent} type="text" placeholder="Comment here..." />
        </Modal.Body>
        <Modal.Footer>
          {/* <Button type="button" variant="contained" endIcon={<Send />} onClick={handleComment}>
            Post
          </Button> */}
          {afterClickPostLoading ? <div className="spinner-grow text-primary" style={{ width: '20px', height: '20px' }}></div> : <div></div>}
          <Button
            variant="outline-primary"
            onClick={(e) => {
              e.preventDefault();
              handleComment();
            }}
          >
            Post
          </Button>
        </Modal.Footer>
        {/* </form> */}
      </Modal>
    </>
  );
}

export default ModalComment;
