import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, LocationOn, Delete } from '@mui/icons-material/';
import { red, deepOrange } from '@mui/material/colors';
import { Card } from 'react-bootstrap';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import moment from 'moment';

function LikedCardLocation(props) {
  const renderTooltip = (prop) => (
    <Tooltip id="button-tooltip" {...prop}>
      <div>{props.post.userId.firstName}</div>
    </Tooltip>
  );

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
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default LikedCardLocation;
