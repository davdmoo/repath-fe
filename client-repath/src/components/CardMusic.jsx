import React, { useEffect, useState } from 'react';
import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, MusicNote, Delete } from '@mui/icons-material/';
import { red, deepOrange } from '@mui/material/colors';
import { Card } from 'react-bootstrap';
import CardLikedPost from './CardLikedPost';
import CardCommentPost from './CardCommentPost';
import ModalComment from './componentsChild/ModalComment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, unlikePost } from '../store/actionCreators/postCreator';
import ModalConfirmDelete from './componentsChild/ModalConfirmDelete';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

function CardMusic(props) {
  // console.log(props.post.comments, 'PROPS.COMMENTS ON CARD MUSIC <<<<<<<<<<<<<');
  // console.log(props.post.likes, 'PROPS.LIKES ON CARD MUSIC <<<<<<<<<<<<<');
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const renderTooltip = (prop) => (
    <Tooltip id="button-tooltip" {...prop}>
      <div>{props.post.userId.firstName}</div>
    </Tooltip>
  );

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

  const doDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container">
            <div className="card-left-side d-flex">
              {props.post.userId.imgUrl ? (
                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                  <Avatar className="avatar-card" alt={props.post.userId.firstName} src={props.post.userId.imgUrl} sx={{ width: 50, height: 50 }} variant="rounded"></Avatar>
                </OverlayTrigger>
              ) : (
                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                  <Avatar className="avatar-card" alt={props.post.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 50, height: 50 }} variant="rounded"></Avatar>
                </OverlayTrigger>
              )}
              <div>
                <span className="dot-card-music">
                  <MusicNote sx={{ color: red[50] }} />
                </span>
              </div>
            </div>

            <div className="card-right-side d-flex flex-row mt-3">
              <div className="content-text-music" style={{ width: '250px', textAlign: 'left' }}>
                <div className="song-title" style={{ width: '250px', paddingRight: '20px' }}>
                  Listening to {props.post.title} by <span className="fw-bold"> {props.post.artist}</span>
                </div>

                <div className="album-title" style={{ width: '200px' }}>
                  {props.post.albumName}
                </div>
                <div style={{ marginTop: '10px' }}>
                  {props.post.likes.length > 0 ? <CardLikedPost likes={props.post.likes} /> : <div></div>}
                  {props.post.comments.length > 0 ? <CardCommentPost comments={props.post.comments} /> : <div></div>}
                </div>
                {/* {props.post.likes.length > 0 ? (
                  props.post.likes.map((like) => {
                    return <CardLikedPost key={like._id} like={like} />;
                  })
                ) : (
                  <div></div>
                )} */}
                {/* {props.post.comments.length > 0 ? (
                  props.post.comments.map((comment) => {
                    return <CardCommentPost key={comment._id} comment={comment} />;
                  })
                ) : (
                  <div></div>
                )} */}
              </div>
              <div style={{ height: '60px' }}>
                <div style={{ marginBottom: '30px' }}>
                  <Avatar alt={props.post.artist} src={props.post.imageAlbum} sx={{ width: 60, height: 60 }} variant="rounded"></Avatar>
                </div>
              </div>
              <div className="content-image-album d-flex flex-row" style={{ width: '200px' }}>
                {/* <Avatar alt={props.post.artist} src={props.post.imageAlbum} sx={{ width: 60, height: 60 }} variant="rounded"></Avatar> */}
                <div style={{ paddingTop: '4px' }}>
                  {checked ? (
                    <Checkbox checked={checked} onChange={() => unlike(likeIdReturner(localStorage.id))} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} sx={{ padding: '0px 3px' }} />
                  ) : (
                    <Checkbox checked={checked} onChange={() => handleLike(props.post._id)} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[500] }} />} sx={{ padding: '0px 3px' }} />
                  )}
                </div>
                <div style={{ paddingTop: '5px' }}>
                  <ModalComment post={props.post} />
                </div>
                {props.post.userId._id == localStorage.id ? (
                  <div style={{ paddingTop: '5px' }}>
                    {/* <IconButton onClick={() => doDelete(props.post._id)} sx={{ padding: '0px 3px' }}>
                      <Delete sx={{ color: deepOrange[900] }} />
                    </IconButton> */}
                    <ModalConfirmDelete id={props.post._id} />
                  </div>
                ) : (
                  <div></div>
                )}
                {/* <div style={{ paddingTop: '5px' }}>
                  <IconButton onClick={() => doDelete(props.post._id)} sx={{ padding: '0px 3px' }}>
                    <Delete sx={{ color: red[500] }} />
                  </IconButton>
                </div> */}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardMusic;
