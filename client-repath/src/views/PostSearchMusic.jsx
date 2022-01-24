import React, { useState, Component, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CardSearchMusic from '../components/CardSearchMusic';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMusicSearch } from '../store/actionCreators/searchCreator';
import { makeid } from '../hooks/randomizeLetter';
import Loader from '../components/componentsChild/Loader';
import ErrorGlobal from '../components/componentsChild/ErrorGlobal';
import LittleLoader from '../components/componentsChild/LittleLoader';

function PostSearchMusic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMusicSearch({ title: makeid(1) }));
  }, []);

  const { musicList, searchLoading, searchError } = useSelector((state) => state.searchReducer);
  const { afterPostLoading } = useSelector((state) => state.postReducer);

  const [searchMusicForm, setSearchMusicForm] = useState({
    title: '',
  });

  const changeSearchMusicForm = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    // console.log('form input<<<<<<');
    setSearchMusicForm({
      ...searchMusicForm,
      [field]: value,
    });
  };

  const doSearchMusic = () => {
    if (searchMusicForm.title.length < 1) {
      throw 'Please input the search field';
    }
    dispatch(fetchMusicSearch(searchMusicForm))
      .then((data) => {
        // setArrayListMusics(data);
      })
      .then(() => {
        // console.log(arrayListMusics, 'INI ARRAY OF LIST MUSIC SETELAH DI SET');
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  if (searchError) {
    return (
      <>
        <Navbar />
        <ErrorGlobal />
      </>
    );
  }

  const musicListExist = () => {
    if (musicList.length > 0) {
      return musicList.map((music, idx) => {
        return <CardSearchMusic key={idx} music={music}></CardSearchMusic>;
      });
    } else {
      return (
        <div>
          <h3 className="mt-3">Sorry... </h3>
          <h4>Music not found.</h4>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="friendlist-page" style={{ height: '100vh', backgroundColor: '#fef2f2', paddingTop: '75px' }}>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h1 className="mt-5">What are you listening to?</h1>
          <div className="input-group my-3" style={{ width: '240px', height: '30px' }}>
            <input
              style={{ fontSize: '11px' }}
              type="search"
              className="form-control rounded"
              placeholder="Search Song/Artist/Album..."
              aria-label="Search people..."
              aria-describedby="search-addon"
              name="title"
              onChange={changeSearchMusicForm}
            />
            <button type="button" className="btn btn-outline-danger" onClick={doSearchMusic}>
              Search
            </button>
          </div>
        </div>

        {afterPostLoading ? (
          <div>
            <LittleLoader />
          </div>
        ) : (
          <div></div>
        )}

        {searchLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          // musicList.map((music, idx) => {
          //   return <CardSearchMusic key={idx} music={music}></CardSearchMusic>;
          // })
          musicListExist()
        )}

        {/* {musicList.map((music, idx) => {
          return <CardSearchMusic key={idx} music={music}></CardSearchMusic>;
        })} */}
      </div>
    </>
  );
}

export default PostSearchMusic;
