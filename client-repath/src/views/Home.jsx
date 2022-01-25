import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, LocationOn, Delete, FormatQuote } from '@mui/icons-material/';
import { red } from '@mui/material/colors';
import Header from '../components/Header';
import { Card } from 'react-bootstrap';
import CardMusic from '../components/CardMusic';
import CardLocation from '../components/CardLocation';
import CardTextImage from '../components/CardTextImage';
import ButtonPopUp from '../components/componentsChild/ButtonPopUp';
import { fetchPosts } from '../store/actionCreators/postCreator';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/componentsChild/Loader';
import ErrorGlobal from '../components/componentsChild/ErrorGlobal';
import { ToastContainer, toast } from 'react-toastify';
import { fetchUserById } from '../store/actionCreators/userCreator';
import InfiniteScroll from 'react-infinite-scroll-component';

function Home() {
  const dispatch = useDispatch();
  const { posts, postsLoading, postsError } = useSelector((state) => state.postReducer);

  const [currentUser, setcurrentUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    header: '',
    imgUrl: '',
  });

  useEffect(() => {
    dispatch(fetchUserById(localStorage.id)).then(({ data }) => {
      setcurrentUser({
        firstName: data.firstName,
        lastName: data.lastname,
        email: data.email,
        imgUrl: data.imgUrl,
        header: data.header,
      });
    });
  }, []);

  // =========================================================================
  const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(fetchPosts(skip)).then(() => {
      setItems(posts);
    });
  }, []);

  useEffect(() => {
    console.log('MASUK 1', skip);
    setSkip(skip + 3);
  }, [dispatch, posts]);

  // useEffect(() => {
  //   dispatch(fetchPosts(skip)).then((data) => {
  //     // setItems(items.concat(posts));

  //     setItems([...items, ...posts]);
  //   });
  // }, [dispatch]);

  const fetchMoreData = () => {
    dispatch(fetchPosts(skip)).then((data) => {
      // setItems(items.concat(data));
      setItems([...items, ...posts]);
      console.log(data, '<<<<<<<<<<<<< INI DATA');
      console.log(items, '<<<<<<<<<<<<< INI ITEMS');
      console.log(posts, '<<<<<<<<<<<<<<<<< INI POSTS');

      // if (data) {
      if (data.length === 0) {
        setHasMore(false);
      }
      // }
    });
  };

  // =========================================================================

  if (postsError) {
    return (
      <>
        <Navbar />
        <ErrorGlobal />
      </>
    );
  }

  return (
    <div style={{ height: '150%' }}>
      <div>
        <ToastContainer />
      </div>
      <Navbar />
      <Header currentUser={currentUser} />

      <div style={{ height: '150vh', overflowY: 'hidden' }}>
        <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={hasMore} loader={<Loader />}>
          {items.map((post) => {
            return post.type === 'location' ? <CardLocation key={post._id} post={post} /> : post.type === 'text' ? <CardTextImage key={post._id} post={post} /> : <CardMusic key={post._id} post={post} />;
          })}
          {/* {postsLoading ? (
            <div>
              <Loader />
            </div>
          ) : (
            items.map((post) => {
              return post.type === 'location' ? <CardLocation key={post._id} post={post} /> : post.type === 'text' ? <CardTextImage key={post._id} post={post} /> : <CardMusic key={post._id} post={post} />;
            })
          )} */}
        </InfiniteScroll>
      </div>

      <ButtonPopUp />
    </div>
  );
}

export default Home;
