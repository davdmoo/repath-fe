import { Avatar, Checkbox, IconButton, Button } from '@mui/material/';
import { FavoriteBorder, Favorite, Delete, FormatQuote } from '@mui/icons-material/';
import { red, deepOrange } from '@mui/material/colors';
import { Card } from 'react-bootstrap';
import CardCommentPost from './CardCommentPost';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import moment from 'moment';

function LikedCardTextImage(props) {
  console.log(props);
  const renderTooltip = (prop) => (
    <Tooltip id="button-tooltip" {...prop}>
      <div>{props.post.userId.firstName}</div>
    </Tooltip>
  );

  return (
    <>
      <Card style={{ border: '0px' }}>
        <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
          <div className="card-container ">
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
                <span className="dot-card-textImage">
                  <FormatQuote sx={{ color: red[50] }} />
                </span>
              </div>
            </div>

            <div className="card-right-side d-flex flex-column">
              {props.post.imgUrl ? (
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
                        <Avatar className="avatar-card-textImage" alt={props.post.userId.firstName} src={props.post.userId.imgUrl} sx={{ width: 30, height: 30 }} variant="rounded"></Avatar>
                      ) : (
                        <Avatar className="avatar-card-textImage" alt={props.post.userId.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} variant="rounded"></Avatar>
                      )}
                    </div>
                    <div className="postText-description d-flex justify-content-center ">
                      <div className="postText-padding">
                        <span className="fw-bold" style={{ fontSize: '1.1em' }}>
                          {props.post.userId.firstName}{' '}
                        </span>{' '}
                        posted:
                        <div style={{ lineHeight: '1.1em' }}>{props.post.text}</div>
                        <div style={{ color: `#9ca3af`, padding: '3px 0px' }}>
                          {moment()
                            .subtract((moment().valueOf() - moment(props.post.created_at)) / 1000, 's')
                            .fromNow()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-text-button d-flex flex-row justify-content-center">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default LikedCardTextImage;
