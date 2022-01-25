import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { fetchPosts } from '../store/actionCreators/postCreator';

import InfiniteScroll from 'react-infinite-scroll-component';
import { setGoogleLogin } from '../store/actionCreators/userCreator';

function TestGoogle() {
  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    dispatch(setGoogleLogin(response));
  };

  const { posts, postsLoading, postsError } = useSelector((state) => state.postReducer);

  useEffect(() => {
    // dispatch(fetchPosts());
  }, []);

  const [items, setItems] = useState(posts);

  const fetchMoreData = () => {
    setItems(items.concat(posts));
  };

  return (
    <div style={{ backgroundColor: 'blue', height: '100vh' }}>
      <h1>COBA COBA GOOGLE LOGIN</h1>
      <GoogleLogin clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
      <div style={{ height: '100%', overflowY: 'hidden' }}>
        <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={true} loader={<h4>Loading...</h4>}>
          {items.map((i, index) => (
            <div key={index}>
              div - #{index} {i._id}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default TestGoogle;
