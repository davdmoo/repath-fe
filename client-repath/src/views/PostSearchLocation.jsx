import React, { useState, Component, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CardSearchLocation from '../components/CardSearchLocation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLocationSearch } from '../store/actionCreators/searchCreator';

function PostSearchLocation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchLocationSearch({ location: 'jakarta' }));
  }, []);

  const { locationList } = useSelector((state) => state.searchReducer);
  console.log(locationList, '<<<<<<<<< INI LOCATION LIST');

  const [searchLocationForm, setSearchLocationForm] = useState({
    location: '',
  });

  const changeSearchLocationForm = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    // console.log('form input<<<<<<');
    setSearchLocationForm({
      ...searchLocationForm,
      [field]: value,
    });
  };

  const doSearchLocation = () => {
    dispatch(fetchLocationSearch(searchLocationForm)).then((data) => {});
  };

  return (
    <>
      <Navbar />
      <div style={{ height: '100vh', backgroundColor: '#fef2f2', paddingTop: '95px' }}>
        <div className="d-flex justify-content-center">
          <div class="input-group my-3" style={{ width: '300px', height: '50px' }}>
            <input type="search" class="form-control rounded" placeholder="Find location..." aria-label="Search location..." aria-describedby="search-addon" name="location" onChange={changeSearchLocationForm} />
            <button type="button" class="btn btn-outline-danger" onClick={doSearchLocation}>
              Search
            </button>
          </div>
        </div>

        {locationList.map((location, idx) => {
          return <CardSearchLocation key={idx} location={location}></CardSearchLocation>;
        })}
      </div>
    </>
  );
}

export default PostSearchLocation;
