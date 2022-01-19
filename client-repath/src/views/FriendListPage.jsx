import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CardFriendList from '../components/CardFriendList';

function FriendListPage() {
  return (
    <>
      <Navbar />
      <div className="friendlist-page" style={{ height: '100vh', backgroundColor: '#fef2f2', paddingTop: '95px' }}>
        <h1 className="pt-2 pb-3">Friend List</h1>
        <CardFriendList />
        <CardFriendList />
      </div>
    </>
  );
}

export default FriendListPage;
