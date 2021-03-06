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
import {useNavigate} from 'react-router-dom'
import ErrorCardHome from '../components/componentsChild/ErrorCardHome';

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

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const navigate = useNavigate();
  const toPost = ()=>{
    navigate('/content')
  }

  const toFriend = ()=>{
    navigate('/search-people')
  }

  if (postsError) {
    return (
      <>
        <Navbar />
        <ErrorGlobal />
      </>
    );
  }

  if(postsLoading){
    return (
      <div>
        <Navbar />
        <Header currentUser={currentUser} />
          <Loader />
      </div>
    )
  }else if(posts.length < 1){
    return (
     <>
        <Navbar />
        <Header currentUser={currentUser} />
        <div className="d-flex justify-content-center mt-5" style={{backgroundColor:"#fef2f2", height:"60vh"}}>
          {/* <div >
              <h3>There's no posts on your timeline.</h3>
              <h5 style={{marginTop: '2vh'}}>Click <a style={{color:'red', textDecoration: 'none'}} href=""  
              onClick={(e) => {
                e.preventDefault();
                toPost();
              }}>here</a> to post something</h5>
              <h5 style={{marginTop: '2vh'}}>Or Click <a style={{color:'red', textDecoration: 'none'}} href=""  
              onClick={(e) => {
                e.preventDefault();
                toFriend();
              }}>here</a> to find new friends</h5>
          </div> */}
        <ErrorCardHome />
        </div>
        <ButtonPopUp />
     </>
    )
  }


  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <Navbar />
      <Header currentUser={currentUser} />

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
