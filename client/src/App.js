import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/NavBar';
import { Routes, Route, useParams} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';
import HomeClass from './components/shared/HomeClass';
import FetchUser from './components/shared/FetchUser';
import ProtectedRoute from './components/shared/ProtectedRoute';

function App() {
  return (
    <div>
      <Navbar />
      <FetchUser>
      <>
       <Routes>
         {/* unprotected */}
       <Route path='/login' element={<Login />}/>
       <Route path='/register' element={<Register />}/>
       <Route path='/' element={<Home />}/>
          {/* Protected */}
         <Route element={<ProtectedRoute />}>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<HomeClass yo={'yoyo'} />}/>
          </Route>

          
          <Route path='*' element={<NoMatch />}/>
       </Routes>
      </>
      </FetchUser>
      <p>Footer for all pages</p>
    </div>
  );
}

export default App;