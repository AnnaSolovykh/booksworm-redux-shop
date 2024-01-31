import React from 'react';
import { Link } from 'react-router-dom';

import LoginModal from '../Auth/LoginModal';
import Logout from '../Auth/Logout';

import styles from './styles.module.css';

const Navbar = ({ isMobile, setIsMobile, handleFavoriteClick, totalQuantity, isLoggedIn, showLoginModal, setShowLoginModal }) => {
    return (
        <>
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}

            <nav 
                className={isMobile ? styles.navLinksMobile : styles.navLinks} 
                onClick={() => setIsMobile(false)}
            >
                <Link to="/" className={`${styles.link} ${styles.linkMobile}`}>HOME</Link>
                <Link to="/favorite-books" className={`${styles.link} ${styles.linkMobile}`} onClick={handleFavoriteClick}>FAVORITES</Link>
                {isLoggedIn ? (
                    <Logout />
                ) : (
                    <Link to="/login" className={`${styles.link} ${styles.linkMobile}`}>LOG IN</Link>
                )}
                <Link to="/cart" className={`${styles.link} ${styles.linkMobile}`}> 
                    <div className={styles.basketBox}>
                        <img src={process.env.PUBLIC_URL + 'extra/basket.png'} alt="a basket" width="35rem"/> 
                        <span className={styles.linkNumber}>{totalQuantity}</span>
                    </div>
                </Link>
            </nav>

            <div className={styles.mobileMenuIconWrapper}>
                <button className={styles.mobileMenuIcon} onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </button>
            </div>

            <div className={styles.container}>
                <Link to="/" className={styles.h1Default}> <h1>Bookworm</h1></Link> 
                <Link to="/cart" className={styles.basketLink}> 
                    <div className={styles.basketBoxMobile}>
                        <img src={process.env.PUBLIC_URL + 'extra/basket.png'} alt="a basket" width="23rem"/> 
                        <span className={styles.linkNumber}>{totalQuantity}</span>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Navbar;
