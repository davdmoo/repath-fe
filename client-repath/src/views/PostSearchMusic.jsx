import React, { useState, Component, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CardSearchMusic from '../components/CardSearchMusic';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMusicSearch } from '../store/actionCreators/searchCreator';
import { makeid } from '../hooks/randomizeLetter';

function PostSearchMusic() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMusicSearch({ title: makeid(1) }));
  }, []);

  const { musicList } = useSelector((state) => state.searchReducer);

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
    dispatch(fetchMusicSearch(searchMusicForm))
      .then((data) => {
        // setArrayListMusics(data);
      })
      .then(() => {
        // console.log(arrayListMusics, 'INI ARRAY OF LIST MUSIC SETELAH DI SET');
      });
  };
  return (
    <>
      <Navbar />
      <div className="friendlist-page" style={{ height: '100vh', backgroundColor: '#fef2f2', paddingTop: '95px' }}>
        <div className="d-flex justify-content-center">
          <div className="input-group my-3" style={{ width: '400px', height: '50px' }}>
            <input type="search" className="form-control rounded" placeholder="Search Song/Artist/Album..." aria-label="Search people..." aria-describedby="search-addon" name="title" onChange={changeSearchMusicForm} />
            <button type="button" className="btn btn-outline-danger" onClick={doSearchMusic}>
              Search
            </button>
          </div>
        </div>

        {musicList.map((music, idx) => {
          return <CardSearchMusic key={idx} music={music}></CardSearchMusic>;
        })}
      </div>
    </>
  );
}

export default PostSearchMusic;
