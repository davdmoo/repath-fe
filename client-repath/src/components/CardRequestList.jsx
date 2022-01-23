import React, { useState } from 'react';
import { Avatar } from '@mui/material/';
import { Card } from 'react-bootstrap';
import { red, blue } from '@mui/material/colors';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useDispatch } from 'react-redux';
import { accFriendReq, delFriendReq } from '../store/actionCreators/followCreator';

function CardRequestList({ user }) {
    const dispatch = useDispatch()

    const handleAccFriend = (userId) => {
        console.log(userId);
        dispatch(accFriendReq(userId))
    }
    const handleDecFriend = (userId) => {
        console.log(userId);
        dispatch(delFriendReq(userId))
    }
    return (
        <Card style={{ border: '0px' }}>
            <Card.Body style={{ backgroundColor: '#fef2f2', padding: '0px' }}>
            <div className="card-container-friendlist">
                <div className="card-left-side-friendlist d-flex">
                {user.imgUrl ? (
                    <Avatar className="avatar-card" alt="David" src={user.imgUrl} sx={{ width: 75, height: 75 }} variant="rounded"></Avatar>
                ) : (
                    <Avatar className="avatar-card" alt={user.firstName} src="/static/images/avatar/1.jpg" sx={{ width: 75, height: 75 }} variant="rounded"></Avatar>
                )}
                </div>
                <div className="card-right-side d-flex flex-row align-items-center">
                <div className="content-friendlist" style={{ width: '250px', textAlign: 'left' }}>
                    <div className="friendlist-name">
                    {user.firstName} {user.lastName}
                    </div>
                    <div className="friendlist-city">{user.city}</div>
                </div>
                </div>
                <div style={{ marginRight: '10px', padding: '15px' }} className="d-flex justify-content-between align-items-center">
                    <PersonRemoveIcon
                    sx={{ width: 40, height: 40, color: red[500] }}
                    onClick={()=> handleDecFriend(user._id)} />
                    <PersonAddIcon
                    sx={{ width: 40, height: 40, color: blue[500] }}
                    onClick={()=> handleAccFriend(user._id)} />
                </div>
            </div>
            </Card.Body>
        </Card>
    );
}

export default CardRequestList;
