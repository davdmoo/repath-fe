import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { fetchLikedPosts } from '../store/actionCreators/postCreator';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/componentsChild/Loader';
import ErrorGlobal from '../components/componentsChild/ErrorGlobal';
import { ToastContainer, toast } from 'react-toastify';
import { fetchUserById } from '../store/actionCreators/userCreator';
import LikedCardTextImage from '../components/LikedCardTextImage';
import LikedCardMusic from '../components/LikedCardMusic';
import LikedCardLocation from '../components/LikedCardLocation';
import ErrorCardLikes from '../components/componentsChild/ErrorCardLikes';

function LikedPage() {
  const dispatch = useDispatch();
  const { likedPosts, postsLoading, postsError } = useSelector((state) => state.postReducer);
  
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
    dispatch(fetchLikedPosts());
  }, []);

  if (postsError) {
    return (
      <>
        <Navbar />
        <ErrorGlobal />
      </>
    );
  }
  if(likedPosts.length < 1){
    return (
     <div style={{height:"100vh"}}>
        <Navbar />
        <div className="d-flex justify-content-center" style={{backgroundColor:"#fef2f2",  paddingTop: "100px"}}>
            <ErrorCardLikes />
        </div>
     </div>
    )
  }
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <Navbar />
      {/* <Header currentUser={currentUser} /> */}

      {postsLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div style={{paddingTop: "95px"}}>
          {likedPosts.map((post) => {
            return post.type === 'location' ? <LikedCardLocation key={post._id} post={post} /> : post.type === 'text' ? <LikedCardTextImage key={post._id} post={post} /> : <LikedCardMusic key={post._id} post={post} />;
          })}
        </div>
      )}
    </>
  );
}

export default LikedPage;
