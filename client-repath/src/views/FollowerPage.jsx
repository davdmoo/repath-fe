import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CardFollower from '../components/CardFollower';
import {fetchFollower} from '../store/actionCreators/followCreator'
import { useDispatch, useSelector } from 'react-redux';


function FollowingPage() {
  const dispatch = useDispatch();
  
  const { follower } = useSelector((state) => state.userReducer);

  useEffect(() => {
    console.log(follower, `COMPONENT`)
    dispatch(fetchFollower());
  }, []);

  // const userFollowingExist = () => {
  //   if (following.length > 0) {
  //     return following.map((user, idx) => {
  //       return <CardFollower key={user._id} user={user.following} />;
  //     });
  //   } else {
  //     return (
  //       <div>
  //         <h3 className="mt-3">Sorry... </h3>
  //         <h4>You haven't follow any user.</h4>
  //       </div>
  //     );
  //   }
  // };
  return (
    <>
      <Navbar />
      <div style={{ height: '100vh', backgroundColor: '#fef2f2', paddingTop: '95px' }}>
        <h1 className="pt-2 pb-3">Followers</h1>
       {follower.map(user=>(
       
          <CardFollower key={user._id} user={user.follower}/>
          
        ))
      }
      </div>
    </>
  );
}

export default FollowingPage;
