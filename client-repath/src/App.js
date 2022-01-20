import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import EditProfile from './views/EditProfile';
import FollowingPage from './views/FollowingPage';
import SearchPeoplePage from './views/SearchPeoplePage';
import PostContent from "./views/PostContent";
import PostSearchMusic from "./views/PostSearchMusic";
import PostSearchLocation from "./views/PostSearchLocation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="/following" element={<FollowingPage />} />
        <Route path="/search-people" element={<SearchPeoplePage />} />
        <Route path="/content" element={<PostContent />} />
        <Route path="/music" element={<PostSearchMusic />} />
        <Route path="/location" element={<PostSearchLocation />} />
      </Routes>
    </div>
  );
}

export default App;
