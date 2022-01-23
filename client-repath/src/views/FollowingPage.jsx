import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CardFriendList from '../components/CardFriendList';
import { fetchFollowing } from '../store/actionCreators/followCreator';

function FollowingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { following } = useSelector((state) => state.userReducer);
  console.log(following, 'INI FOLOWINGGGGGGGGGGGG');

  useEffect(() => {
    console.log(following, `COMPONENT`);
    dispatch(fetchFollowing());
  }, []);

  const userFollowingExist = () => {
    if (following.length > 0) {
      return following.map((user, idx) => {
        if (user.following) {
          return <CardFriendList key={user._id} user={user} />;
        }
      });
    } else {
      return (
        <div>
          <h3 className="mt-3">Sorry... </h3>
          <h4>You haven't follow any user.</h4>
        </div>
      );
    }
  };
  return (
    <>
      <Navbar />
      <div style={{ height: '100vh', backgroundColor: '#fef2f2', paddingTop: '95px' }}>
        <h1 className="pt-2 pb-3">Following</h1>
        {userFollowingExist()}
      </div>
    </>
  );
}

export default FollowingPage;
