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




function App() {

  const totalQuantity = useSelector ( getTotalQuantity )

  return (
    <div>
      <Promo />
    
        <Router>
    <nav>
      <Link to="/" className='link'>HOME</Link>
      <Link to="/Signin" className='link'>SIGN IN/REGISTER</Link>
      <Link to="/Cart" className='link'> 
      <div className='basket-box'>
        <img src= {process.env.PUBLIC_URL + "extra/basket.png"}  alt="a basket" width="50rem"/> 
        <span className='link-number'>{totalQuantity} </span>
      </div>
      </Link>


    </nav>

    <div className='container'>
          <h1>Bookworm</h1>
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
