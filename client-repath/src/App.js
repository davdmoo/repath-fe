import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthGuardHome, AuthGuardLogin } from './routes/AuthGuard.js';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import EditProfile from './views/EditProfile';
import FollowingPage from './views/FollowingPage';
import SearchPeoplePage from './views/SearchPeoplePage';
import PostContent from './views/PostContent';
import PostSearchMusic from './views/PostSearchMusic';
import PostSearchLocation from './views/PostSearchLocation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <AuthGuardLogin>
              <Home />
            </AuthGuardLogin>
          }
        />
        <Route
          path="/login"
          element={
            <AuthGuardHome>
              <Login />
            </AuthGuardHome>
          }
        />
        <Route
          path="/register"
          element={
            <AuthGuardHome>
              <Register />
            </AuthGuardHome>
          }
        />
        <Route
          path="/following"
          element={
            <AuthGuardLogin>
              <FollowingPage />
            </AuthGuardLogin>
          }
        />
        <Route
          path="/search-people"
          element={
            <AuthGuardLogin>
              <SearchPeoplePage />
            </AuthGuardLogin>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthGuardLogin>
              <EditProfile />
            </AuthGuardLogin>
          }
        />
        <Route
          path="/content"
          element={
            <AuthGuardLogin>
              <PostContent />
            </AuthGuardLogin>
          }
        />
        <Route
          path="/music"
          element={
            <AuthGuardLogin>
              <PostSearchMusic />
            </AuthGuardLogin>
          }
        />
        <Route
          path="/location"
          element={
            <AuthGuardLogin>
              <PostSearchLocation />
            </AuthGuardLogin>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
