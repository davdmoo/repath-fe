import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
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
import FollowerPage from './views/FollowerPage';
import RequestPage from './views/RequestPage';
import TestGoogle from './views/TestGoogle';

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
          path="/followers"
          element={
            <AuthGuardLogin>
              <FollowerPage />
            </AuthGuardLogin>
          }
        />
        <Route
          path="/requests"
          element={
            <AuthGuardLogin>
              <RequestPage />
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
        {/* <Route path="/testgoogle" element={<TestGoogle />} /> */}
      </Routes>
    </div>
  );
}

export default App;
