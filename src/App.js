import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Promo from './Components/Others/Promo';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home';
import Cart from './Components/Cart/Cart';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Logout from './Components/Auth/Logout';
import FavoriteBooks from './Components/FavoriteBooks/FavoriteBooks';

import { getTotalQuantity } from './Components/Redux/cartSlice';
import { selectIsLoggedIn } from './Components/Redux/authenticationSlice';

import './App.css';

const App = () => {

  const totalQuantity = useSelector ( getTotalQuantity );
  const isLoggedIn = useSelector(selectIsLoggedIn); 
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <Promo />
      <Router>
        <Navbar
          isMobile={isMobile}
          setIsMobile={setIsMobile}
          totalQuantity={totalQuantity}
          isLoggedIn={isLoggedIn}
        />

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/logout' element={<ProtectedRoute component={Logout} />} />
          <Route path='/favorite-books' element={<ProtectedRoute component={FavoriteBooks} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
