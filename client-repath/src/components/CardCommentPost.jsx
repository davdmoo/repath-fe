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
            <ListItemText secondary={open ? "Hide comments": "Show all comments"} />
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
    </div>
  );
}

export default CardCommentPost;
