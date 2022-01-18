import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Avatar, Checkbox, IconButton } from '@mui/material/';
import { FavoriteBorder, Favorite, LocationOn, Delete, FormatQuote } from '@mui/icons-material/';
import { red } from '@mui/material/colors';
import Header from '../components/Header';
import { Card } from 'react-bootstrap';
import CardMusic from '../components/CardMusic';
import CardLocation from '../components/CardLocation';
import CardTextImage from '../components/CardTextImage';

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CardMusic />
      <CardLocation />
      <CardMusic />
      <CardTextImage />
      <CardLocation />
      <CardTextImage />
    </>
  );
}

export default Home;
