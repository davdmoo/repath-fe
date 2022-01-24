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

  useEffect(() => {
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
          <h1 style={{ marginTop: '150px' }}>Sorry... </h1>
          <h4>You don't have any friend yet</h4>
          <h5>
            Click{' '}
            <a
              style={{ color: 'red', textDecoration: 'none' }}
              href=""
              onClick={(e) => {
                e.preventDefault();
                navigate('/search-people');
              }}
            >
              here
            </a>{' '}
            to find people
          </h5>
        </div>
      );
    }
  };
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', backgroundColor: '#fef2f2', paddingTop: '95px' }}>
        <h1 className="pt-4 pb-3">Following (ini jadi page friendlist)</h1>
        {userFollowingExist()}
      </div>
    </>
  );
}

export default FollowingPage;
