import React, { useState, useEffect } from 'react';
import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, LocationOn, Delete } from '@mui/icons-material/';
import { red, deepOrange } from '@mui/material/colors';
import { Card } from 'react-bootstrap';
import CardLikedPost from './CardLikedPost';
import CardCommentPost from './CardCommentPost';
import ModalComment from './componentsChild/ModalComment';
import { useDispatch } from 'react-redux';
import { deletePost, likePost, unlikePost } from '../store/actionCreators/postCreator';
import ModalConfirmDelete from './componentsChild/ModalConfirmDelete';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import moment from 'moment';

function CardLocation(props) {
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
                  <Avatar className="avatar-card" alt={props.post.userId.firstName} src={props.post.userId.imgUrl} sx={{ width: 45, height: 45 }} variant="rounded"></Avatar>
                </OverlayTrigger>
              ) : (
                <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                  <Avatar className="avatar-card" alt={props.post.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 45, height: 45 }} variant="rounded"></Avatar>
                </OverlayTrigger>
              )}
              <div>
                <span className="dot-card-location">
                  <LocationOn sx={{ color: red[50], fontSize: 20 }} />
                </span>
              </div>
            </div>
            <div className="card-right-side d-flex flex-row">
              <div className="content-location">
                <div className="location-title">
                  Arrived in <span className="fw-bold">{props.post.location}</span>
                </div>
                <div style={{ color: `#9ca3af`, padding: '0px 0px', fontSize: '13px' }}>
                  {moment()
                    .subtract((moment().valueOf() - moment(props.post.created_at)) / 1000, 's')
                    .fromNow()}
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
              <div className=" d-flex flex-row" style={{ width: '50px' }}>
                <div style={{ paddingTop: '10px' }}>
                  {checked ? (
                    <Checkbox
                      checked={checked}
                      onChange={() => unlike(likeIdReturner(localStorage.id))}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite sx={{ color: red[400] }} />}
                      sx={{ padding: '0px 1px', '& .MuiSvgIcon-root': { fontSize: 16 } }}
                    />
                  ) : (
                    <Checkbox checked={checked} onChange={() => handleLike(props.post._id)} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: red[400] }} />} sx={{ padding: '0px 1px', '& .MuiSvgIcon-root': { fontSize: 16 } }} />
                  )}
                </div>
                <div style={{ paddingTop: '10px' }}>
                  <ModalComment post={props.post} />
                </div>
                {props.post.userId._id == localStorage.id ? (
                  <div style={{ paddingTop: '10px' }}>
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

export default CardLocation;
