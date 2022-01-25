import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';

function TestGoogle() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  //   const dispatch = useDispatch();
  //   const { posts, postsLoading, postsError } = useSelector((state) => state.postReducer);

  //   const [currentUser, setcurrentUser] = useState({
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     header: '',
  //     imgUrl: '',
  //   });

  //   useEffect(() => {
  //     dispatch(fetchUserById(localStorage.id)).then(({ data }) => {
  //       setcurrentUser({
  //         firstName: data.firstName,
  //         lastName: data.lastname,
  //         email: data.email,
  //         imgUrl: data.imgUrl,
  //         header: data.header,
  //       });
  //     });
  //   }, []);

  //   useEffect(() => {
  //     dispatch(fetchPosts());
  //   }, []);

  //   if (postsError) {
  //     return (
  //       <>
  //         <Navbar />
  //         <ErrorGlobal />
  //       </>
  //     );
  //   }

  return (
    <>
      <h1>COBA COBA GOOGLE LOGIN</h1>
      <GoogleLogin clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" buttonText="Login" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} />
    </>
  );
}

export default TestGoogle;
