import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import FriendListPage from './views/FriendListPage';
import AddFriendPage from './views/AddFriendPage';
import PostContent from "./views/PostContent";
import PostSearchMusic from "./views/PostSearchMusic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/friendlist" element={<FriendListPage />} />
        <Route path="/addfriend" element={<AddFriendPage />} />
        <Route path="/content" element={<PostContent />} />
        <Route path="/music" element={<PostSearchMusic />} />
      </Routes>
    </div>
  );
}

export default App;
