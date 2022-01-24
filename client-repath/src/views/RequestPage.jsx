import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getRequest } from '../store/actionCreators/followCreator';
import { useDispatch, useSelector } from 'react-redux';
import CardRequestList from '../components/CardRequestList';

function RequestPage() {
  const dispatch = useDispatch();

  const { request } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getRequest());
  }, []);

  const userRequestExist = () => {
    return (
      <>
        <CardRequestList />
        <CardRequestList />
        <CardRequestList />
      </>
    );
    if (request.length > 0) {
      return request.map((user, idx) => {
        return <CardRequestList key={user._id} user={user.sender} />;
      });
    } else {
      return (
        <div>
          <h4 style={{ paddingTop: '200px' }}>There are no friend request.</h4>
        </div>
      );
    }
  };
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', backgroundColor: '#fef2f2', paddingTop: '105px' }}>
        <h1 className="pt-2 pb-3">Friend Request</h1>
        {userRequestExist()}
      </div>
    </>
  );
}

export default RequestPage;
