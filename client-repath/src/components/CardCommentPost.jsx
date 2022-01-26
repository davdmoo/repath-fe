import React, { useState } from 'react';
import RowCommentSection from './componentsChild/RowCommentSection';
import RowListComment from './componentsChild/RowListComment';
import { Avatar, Collapse, ListItemButton, ListItemIcon, ListItemText, List } from '@mui/material/';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

function CardCommentPost(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const showComments = () => {
    if (props.comments.length < 4) {
      return props.comments.map((rowComment) => {
        return <RowCommentSection key={rowComment._id} rowComment={rowComment} />;
      });
    } else {
      return (
        <>
          <ListItemButton onClick={handleClick}>
            <ListItemText secondary="Show all comments" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {props.comments.map((rowComment) => {
                return <RowListComment key={rowComment._id} rowComment={rowComment} />;
              })}
            </List>
          </Collapse>
        </>
      );
    }
  };

  return (
    <div className="comment-card-container d-flex flex-column shadow">
      {showComments()}
      {/* {props.comments.map((rowComment) => {
        return <RowCommentSection key={rowComment._id} rowComment={rowComment} />;
      })} */}
      {/* <ListItemButton onClick={handleClick}>
        <ListItemText primary="Show more comments" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ ml: '-16px', mt: '-15px', minHeight: '50px' }}>
            <div className=" d-flex flex-row ">
              <div className="comment-section-pict">
                <Avatar className="avatar-card-textImage" alt="John" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} variant="rounded"></Avatar>
              </div>
              <div className="comment-section-description d-flex justify-content-center ">
                <div className="comment-section-padding">
                  <span className="fw-bold">John: </span>
                  <span style={{ marginBottom: '20px' }}> Hallo, Check! Kalo Tulisannya panjang bakal gimana?</span>
                  <div style={{ color: `#9CA3AF` }}>34 minutes ago </div>
                </div>
              </div>
            </div>
          </ListItemButton>
          <ListItemButton sx={{ ml: '-16px', mt: '-20px', minHeight: '50px' }}>
            <div className=" d-flex flex-row ">
              <div className="comment-section-pict">
                <Avatar className="avatar-card-textImage" alt="John" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} variant="rounded"></Avatar>
              </div>
              <div className="comment-section-description d-flex justify-content-center ">
                <div className="comment-section-padding">
                  <span className="fw-bold">John: </span>
                  <span style={{ marginBottom: '20px' }}> Hallo, Check!</span>

                  <div style={{ color: `#9CA3AF` }}>34 minutes ago </div>
                </div>
              </div>
            </div>
          </ListItemButton>
        </List>
      </Collapse> */}
      {/* {props.comments.map((rowComment) => {
        return <RowCommentSection key={rowComment._id} rowComment={rowComment} />;
      })} */}
      {/* <div className=" d-flex flex-row ">
        <div className="comment-section-pict">
          <Avatar className="avatar-card-textImage" alt="John" src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} variant="rounded"></Avatar>
        </div>
        <div className="comment-section-description d-flex justify-content-center ">
          <p className="comment-section-padding">
            <span className="fw-bold">John: </span>
            Hallo, Check!
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default CardCommentPost;
