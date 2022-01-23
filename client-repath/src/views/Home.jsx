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

function Home() {
  const dispatch = useDispatch();
  const { posts, postsLoading, postsError } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (postsError) {
    return <ErrorGlobal />;
  }

  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <Navbar />
      <Header />

      {postsLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        posts.map((post) => {
          return post.type === 'location' ? <CardLocation key={post._id} post={post} /> : post.type === 'text' ? <CardTextImage key={post._id} post={post} /> : <CardMusic key={post._id} post={post} />;
        })
      )}

      <ButtonPopUp />
    </>
  );
}

export default Home;
