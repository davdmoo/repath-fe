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

function Home() {
  const { posts, postsLoading, postsError } = useSelector((state) => state.postReducer);
  console.log(posts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      {posts.map((post) => {
        return post.type === 'location' ? <CardLocation key={post._id} post={post} /> : post.type === 'text' ? <CardTextImage key={post._id} post={post} /> : <CardMusic key={post._id} post={post} />;
        // return <TableRow key={post.id} post={post} />;
      })}

      <ButtonPopUp />
    </>
  );
}

export default Home;
