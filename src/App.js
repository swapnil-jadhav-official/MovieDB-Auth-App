import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import ProtectedRoute from './components/ProtectedRoute';
// import SearchMovie from './components/SearchMovie';
import { AuthContextProvider } from './context/AuthContext';
import { Home, Account, Login, SignUp } from './pages';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        {/* <SearchMovie /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          
          {/* Account page can only be accessed by a user who is logged in */}
          <Route path="/account" 
            element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
