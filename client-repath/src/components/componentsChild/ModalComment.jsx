import React, { useState } from 'react';
import { IconButton, TextField, Button } from '@mui/material/';
import { Modal } from 'react-bootstrap';
import { Comment, Send } from '@mui/icons-material/';
import { blue } from '@mui/material/colors';

function ModalComment() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <IconButton onClick={handleShow}>
        <Comment sx={{ color: blue[500] }} />
      </IconButton>
      {/* ======================================== MODAL ========================================*/}
      <Modal show={show} onHide={handleClose} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField fullWidth id="standard-basic" label="Standard" variant="standard" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" endIcon={<Send />}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComment;
