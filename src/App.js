import './App.css';
import Promo from './Components/Others/Promo';
import Home from './Home';
import Cart from './Components/Cart/Cart';
import Signin from './Signin';
import { useSelector } from "react-redux";
import { getTotalQuantity } from './Components/Redux/cartSlice';


import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";
import { useState } from 'react';




function App() {

  const totalQuantity = useSelector ( getTotalQuantity )
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div>
      <Promo />
    
        <Router>
    <nav className={isMobile ? "nav-links-mobile" : "nav-links"} 
      onClick={ () => setIsMobile (false)}>
        <Link to="/" className='link link-mobile'>HOME</Link>
        <Link to="/Signin" className='link link-mobile'>SIGN IN/REGISTER</Link>
    
      <Link to="/Cart" className='link link-mobile'> 
      <div className='basket-box'>
        <img src= {process.env.PUBLIC_URL + "extra/basket.png"}  alt="a basket" width="35rem"/> 
        <span className='link-number'>{totalQuantity} </span>
      </div>
      </Link>

    </nav>


    <div className='container'>
      <Link to="/" className='h1-default'> <h1>Bookworm</h1></Link> 

      <Link to="/Cart" className='basket-link'> 
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
      <Route path="/"  element={<Home/>}/>
      <Route path="/Signin"  element={<Signin/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </Router>

    

    </div>
  );
}

export default App;
