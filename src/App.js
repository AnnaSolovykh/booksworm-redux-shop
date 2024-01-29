import './App.css';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Promo from './Components/Others/Promo';
import Home from './Home';
import Cart from './Components/Cart/Cart';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Logout from './Components/Auth/Logout';
import LoginModal from './Components/Others/LoginModal';
import FavoriteBooks from './Components/FavoriteBooks/FavoriteBooks';
import { useSelector } from "react-redux";
import { getTotalQuantity } from './Components/Redux/cartSlice';
import { selectIsLoggedIn } from './Components/Redux/authenticationSlice';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

const App = () => {

  const totalQuantity = useSelector ( getTotalQuantity );
  const isLoggedIn = useSelector(selectIsLoggedIn); 
  const [isMobile, setIsMobile] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleFavoriteClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLoginModal(true); 
    }
  };

  return (
    <div>
      <Promo />
      <Router>
        <nav 
          className={isMobile ? "nav-links-mobile" : "nav-links"} 
          onClick={ () => setIsMobile (false)}
        >
          <Link to="/" className='link link-mobile'>HOME</Link>
          <Link to="/favorite-books" className='link link-mobile' onClick={handleFavoriteClick}>FAVORITES</Link>
          {isLoggedIn ? (
            <Logout />
          ) : (
            <Link to="/login" className='link link-mobile'>LOG IN</Link>
          )}
          <Link to="/cart" className='link link-mobile'> 
            <div className='basket-box'>
              <img src= {process.env.PUBLIC_URL + "extra/basket.png"}  alt="a basket" width="35rem"/> 
              <span className='link-number'>{totalQuantity} </span>
            </div>
          </Link>
        </nav>

        {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}

        <div className='container'>
          <Link to="/" className='h1-default'> <h1>Bookworm</h1></Link> 
          <Link to="/cart" className='basket-link'> 
            <div className='basket-box-mobile'>
              <img src= {process.env.PUBLIC_URL + "extra/basket.png"}  alt="a basket" width="23rem"/> 
              <span className='link-number'>{totalQuantity} </span>
            </div>
          </Link>
          <button className='mobile-menu-icon'
              onClick={ () => setIsMobile(!isMobile)}>
              {isMobile ? (
                <i className="fas fa-times"></i>
              ):(
                <i className="fas fa-bars"></i>
              )}
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/logout" element={<ProtectedRoute component={Logout} />} />
          <Route path="/favorite-books" element={<ProtectedRoute component={FavoriteBooks} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
