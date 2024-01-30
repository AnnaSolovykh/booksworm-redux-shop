import React from 'react';
import { Link } from 'react-router-dom';

import LoginModal from '../Others/LoginModal';

const Navbar = ({ isMobile, setIsMobile, handleFavoriteClick, totalQuantity, isLoggedIn, showLoginModal, setShowLoginModal }) => {
    return (
        <>
        {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}

        <nav 
            className={isMobile ? 'nav-links-mobile' : 'nav-links'} 
            onClick={() => setIsMobile(false)}
        >
            <Link to='/' className='link link-mobile'>HOME</Link>
            <Link to='/favorite-books' className='link link-mobile' onClick={handleFavoriteClick}>FAVORITES</Link>
            {isLoggedIn ? (
                <Link to='/logout' className='link link-mobile'>LOG OUT</Link>
            ) : (
                <Link to='/login' className='link link-mobile'>LOG IN</Link>
            )}
            <Link to='/cart' className='link link-mobile'> 
                <div className='basket-box'>
                    <img src={process.env.PUBLIC_URL + 'extra/basket.png'} alt='a basket' width='35rem'/> 
                    <span className='link-number'>{totalQuantity}</span>
                </div>
            </Link>
        </nav>

        <div className='container'>
            <Link to='/' className='h1-default'> <h1>Bookworm</h1></Link> 
            <Link to='/cart' className='basket-link'> 
                <div className='basket-box-mobile'>
                    <img src= {process.env.PUBLIC_URL + 'extra/basket.png'}  alt='a basket' width='23rem'/> 
                    <span className='link-number'>{totalQuantity} </span>
                </div>
            </Link>
            <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>
        </div>
        </>
    );
}

export default Navbar;
