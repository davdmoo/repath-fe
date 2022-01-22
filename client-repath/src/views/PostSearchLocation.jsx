import React, { useState, Component, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import CardSearchLocation from '../components/CardSearchLocation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchLocationSearch } from '../store/actionCreators/searchCreator';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import Loader from '../components/componentsChild/Loader';
import ErrorGlobal from '../components/componentsChild/ErrorGlobal';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXptaWZ0cmQiLCJhIjoiY2t5bXE1dW1qMmFpOTJ2cDB6Nm9nNXBzaSJ9.kq9BAuFWAzxcnwgJHsV-zQ';

function PostSearchLocation() {
  // ================================================== MAPBOX ==================================================

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(107.56667);
  const [lat, setLat] = useState(-6.95);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    dispatch(fetchLocationSearch({ location: 'jakarta' })).then((data) => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [data[0].center[0], data[0].center[1]],
        zoom: zoom,
      });
    });
  }, []);

  // ================================================== END OF MAPBOX ==================================================

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { locationList, searchLoading, searchError } = useSelector((state) => state.searchReducer);


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
    dispatch(fetchLocationSearch(searchLocationForm)).then((data) => {
      //   if (map.current) return; // initialize map only once
      if (data[0]) {
        console.log('HALOOOOOOO');
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [data[0].center[0], data[0].center[1]],
          zoom: zoom,
        });
      }
    });

  };

  if (searchError) {
    return <ErrorGlobal />;
  }

  // if (searchLoading) {
  //   return (
  //     <div style={{ paddingTop: '200px' }}>
  //       <Loader />
  //     </div>
  //   );
  // }

  const locationListExist = () => {
    if (locationList.length > 0) {
      return locationList.map((location, idx) => {
        return <CardSearchLocation key={idx} location={location}></CardSearchLocation>;
      });
    } else {
      return (
        <div>
          <h3 className="mt-3">Sorry... </h3>
          <h4>We can't find your location.</h4>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar />
      {/* <div className="wrapper-map">
        <div ref={mapContainer} className="map-container" />
      </div> */}

      <div style={{ height: '100vh', backgroundColor: '#fef2f2' }}>
        <div className="wrapper-map">
          <div ref={mapContainer} className="map-container" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="input-group my-3" style={{ width: '300px', height: '50px' }}>
            <input type="search" className="form-control rounded" placeholder="Find location..." aria-label="Search location..." aria-describedby="search-addon" name="location" onChange={changeSearchLocationForm} />
            <button type="button" className="btn btn-outline-danger" onClick={doSearchLocation}>
              Search
            </button>
          </div>
        </div>

        {/* {locationList.map((location, idx) => {
          return <CardSearchLocation key={idx} location={location}></CardSearchLocation>;
        })} */}

        {searchLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          // locationList.map((location, idx) => {
          //   return <CardSearchLocation key={idx} location={location}></CardSearchLocation>;
          // })
          locationListExist()
        )}
      </div>
    </>
  );
}

export default PostSearchLocation;
