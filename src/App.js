import './App.css';
import Promo from './Components/Others/Promo';
import Home from './Home';
import Cart from './Components/Cart/Cart';
import Signin from './Signin';
import Like from './Likes/Like';

import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";




function App() {
  return (
    <div>
      <Promo />
    
        <Router>
    <nav>
      <Link to="/" className='link'>HOME</Link>
      <Link to="/Signin" className='link'>SIGN IN/REGISTER</Link>
      <Link to="/Likes/Like" className='link'>WISH LIST</Link>
      <Link to="/Cart" className='link'> <img src= {process.env.PUBLIC_URL + "extra/basket.png"}  alt="a basket" width="60rem"/></Link>
    </nav>

    <div className='container'>
          <h1>Bookworm</h1>
    </div>

    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/Signin"  element={<Signin/>}/>
      <Route path="/Likes/Like" element={<Like/>}/>
      <Route path="/Cart" element={<Cart/>}/>
    </Routes>
    </Router>

    </div>
  );
}

export default App;
