import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getRequest } from '../store/actionCreators/followCreator';
import { useDispatch, useSelector } from 'react-redux';
import CardRequestList from '../components/CardRequestList';
import Loader from '../components/componentsChild/Loader';
import { ToastContainer, toast } from 'react-toastify';
import PersonPinSharpIcon from '@mui/icons-material/PersonPinSharp';

function RequestPage() {
  const dispatch = useDispatch();

  const { request, userLoading } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getRequest());
  }, []);

  const userRequestExist = () => {
    if (userLoading) {
      return <Loader />;
    } else if (request.length > 0) {
      return request.map((user) => {
        return <CardRequestList key={user._id} user={user.sender} reqId={user._id} />;
      });
    } else {
      return (
        <div>
          <h4 style={{ paddingTop: '150px' }}>There is no friend request.</h4>
        </div>
      );
    }
  };
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div style={{ minHeight: '100vh', backgroundColor: '#fef2f2', paddingTop: '105px' }}>
        <h1 className="pt-2 pb-3"> <PersonPinSharpIcon style={{width: '40px', height:'40px', marginRight: '5px'}}></PersonPinSharpIcon> Friend Request</h1>
        {userRequestExist()}
      </div>
    </>
  );
}

export default RequestPage;
