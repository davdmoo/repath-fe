import React, { useState, useEffect } from 'react';
import { Avatar, Checkbox, IconButton, Button } from '@mui/material/';
import { FavoriteBorder, Favorite, Delete, FormatQuote } from '@mui/icons-material/';
import { red, deepOrange } from '@mui/material/colors';
import { Card } from 'react-bootstrap';
import CardLikedPost from './CardLikedPost';
import CardCommentPost from './CardCommentPost';
import ModalComment from './componentsChild/ModalComment';
import { deletePost, likePost, unlikePost } from '../store/actionCreators/postCreator';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';
import ModalConfirmDelete from './componentsChild/ModalConfirmDelete';
import { errorToastAlert2 } from '../hooks/errorToastAlert';

function CardTextImage(props) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (props.post.likes) {
      for (let i = 0; i < props.post.likes.length; i++) {
        const like = props.post.likes[i];

        if (like.userId._id === localStorage.id) {
          setChecked(true);
          break;
        } else {
          setChecked(false);
        }
      }
    } else {
      setChecked(false);
    }
  }, []);

  const handleLike = (id) => {
    dispatch(likePost(id))
      .then(() => {
        setChecked(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unlike = (likeId) => {
    dispatch(unlikePost(likeId))
      .then(() => {
        setChecked(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function likeIdReturner(userId) {
    if (props.post.likes) {
      for (let i = 0; i < props.post.likes.length; i++) {
        const like = props.post.likes[i];

        if (like.userId._id === userId) {
          return like._id;
        }
      }
    } else {
      return false;
    }
  }

  // const doDelete = (postId) => {
  //   dispatch(deletePost(postId));
  // };

  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container ">
            <div className="card-left-side d-flex">
              <div>
                <span className="dot-card-textImage">
                  <FormatQuote sx={{ color: red[50] }} />
                </span>
              </div>
            </div>
            <div className="card-right-side d-flex flex-column">
              {props.post.imgUrl !== '[object Object]' ? (
                <div
                  style={{
                    height: '250px',
                    backgroundImage: `url(${props.post.imgUrl})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginRight: '20px',
                  }}
                ></div>
              ) : (
                <div></div>
              )}
              <div className="content-section-wrapper d-flex flex-column">
                <div className="content-text d-flex flex-row">
                  <div className="postText-container d-flex flex-row shadow">
                    <div className="comment-section-pict">
                      {props.post.userId.imgUrl ? (
                        <Avatar className="avatar-card-textImage" alt={props.post.userId.firstName} src={props.post.userId.imgUrl} sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
                      ) : (
                        <Avatar className="avatar-card-textImage" alt={props.post.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
                      )}
                    </div>
                    <div className="postText-description d-flex justify-content-center ">
                      <p className="postText-padding">
                        <span className="fw-bold">{props.post.userId.firstName}: </span>
                        {props.post.text}
                      </p>
                    </div>
                  </div>
                  <div className="content-text-button d-flex flex-row justify-content-center">
                    <div style={{ marginTop: '9px' }}>
                      {checked ? (
                        <Checkbox checked={checked} onChange={() => unlike(likeIdReturner(localStorage.id))} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[400] }} />} sx={{ padding: '0px 3px' }} />
                      ) : (
                        <Checkbox checked={checked} onChange={() => handleLike(props.post._id)} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[400] }} />} sx={{ padding: '0px 3px' }} />
                      )}
                    </div>
                    <div style={{ marginTop: '10px' }}>
                      {' '}
                      <ModalComment post={props.post} />
                    </div>
                    {props.post.userId._id == localStorage.id ? (
                      <div style={{ marginTop: '10px' }}>
                        {/* <IconButton onClick={() => doDelete(props.post._id)} sx={{ padding: '0px 3px' }}> */}
                        {/* <IconButton onClick={handleShow} sx={{ padding: '0px 3px' }}>
                          <Delete sx={{ color: deepOrange[900] }} />
                        </IconButton> */}
                        <ModalConfirmDelete id={props.post._id} />
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {/* <div style={{ marginTop: '10px' }}>
                      <IconButton onClick={() => doDelete(props.post._id)} sx={{ padding: '0px 3px' }}>
                        <Delete sx={{ color: red[500] }} />
                      </IconButton>
                    </div> */}
                  </div>
                </div>
                {props.post.likes.length > 0 ? <CardLikedPost likes={props.post.likes} /> : <div></div>}
                {props.post.comments.length > 0 ? <CardCommentPost comments={props.post.comments} /> : <div></div>}
                {/* {props.post.comments.length > 0 ? (
                  props.post.comments.map((comment) => {
                    return <CardCommentPost key={comment._id} comment={comment} />;
                  })
                ) : (
                  <div></div>
                )} */}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure want to delete your selected post?</Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" sx={{ marginRight: '10px' }} color="warning">
            Cancel
          </Button>
          <Button variant="contained" color="error" startIcon={<Delete />}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default CardTextImage;
