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
import Loader2 from '../components/componentsChild/Loader2';
import ErrorGlobal from '../components/componentsChild/ErrorGlobal';
import { ToastContainer, toast } from 'react-toastify';
import { fetchUserById } from '../store/actionCreators/userCreator';
import InfiniteScroll from 'react-infinite-scroll-component';

function Home() {
  const dispatch = useDispatch();
  const { posts, postsLoading, postsError, allPosts, hasMore } = useSelector((state) => state.postReducer);

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
  // const [hasMore, setHasMore] = useState(true);
  const [skip, setSkip] = useState(0);
  const [items, setItems] = useState([]);

  // window.onbeforeunload = function () {
  //   window.scrollTo(0, 0);
  // };

  useEffect(() => {
    dispatch(fetchPosts(0));
  }, [dispatch]);

  useEffect(() => {
    setItems(posts);
  }, [posts]);

  const fetchMoreData = (e) => {
    dispatch(fetchPosts(posts.length));
  };

  if (postsError) {
    return (
      <>
        <Navbar />
        <ErrorGlobal />
      </>
    );
  }

  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <Navbar />
      <Header currentUser={currentUser} />

      <div style={{ minHeight: '100vh', overflowY: 'hidden' }}>
        <InfiniteScroll dataLength={items.length} next={fetchMoreData} hasMore={hasMore} loader={<Loader2 />}>
          {items.map((post, idx) => {
            return post.type === 'location' ? <CardLocation key={idx} post={post} idx={idx} /> : post.type === 'text' ? <CardTextImage key={idx} post={post} idx={idx} /> : <CardMusic key={idx} post={post} idx={idx} />;
          })}
        </InfiniteScroll>
      </div>

      <ButtonPopUp />
    </div>
  );
}

export default Home;
