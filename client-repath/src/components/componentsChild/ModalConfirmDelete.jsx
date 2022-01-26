import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material/';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Delete } from '@mui/icons-material/';
import { deepOrange } from '@mui/material/colors';
import { deletePost } from '../../store/actionCreators/postCreator';
import { warnToastAlert } from '../../hooks/errorToastAlert';

function ModalConfirmDelete({ id }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const doDelete = (postId) => {
    dispatch(deletePost(postId)).then(() => {
      setShow(false);
      warnToastAlert('Success deleted post!', 'top-center', 3000, false);
    });
  };

  return (
    <>
      <IconButton onClick={handleShow} sx={{ padding: '0px 1px' }}>
        <Delete sx={{ color: deepOrange[900], fontSize: 16 }} />
      </IconButton>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete your selected post?</Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleClose} variant="outlined" sx={{ marginRight: '10px' }} color="warning">
            Cancel
          </Button> */}
          {/* <Button
            onClick={(e) => {
              e.preventDefault();
              doDelete(id);
            }}
            variant="contained"
            color="error"
            startIcon={<Delete />}
          >
            Delete
          </Button> */}
          <Button variant="outline-warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              doDelete(id);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalConfirmDelete;
