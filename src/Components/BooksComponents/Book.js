import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';

import ChangeQuantity from '../Cart/ChangeQuantity';
import LoginModal from '../Auth/LoginModal';

import { addItemToCart, getCartItems, updateQuantity } from '../Redux/cartSlice';
import { selectIsLoggedIn } from '../Redux/authenticationSlice';
import { 
    setFavoriteStatus, 
    getFavoriteStatus, 
    fetchIsFavorite, 
    addToFavoritesAsync, 
    removeFromFavoritesAsync 
} from '../Redux/favoritesSlice';

import styles from './styles.module.css';

const Book = ({book}) => {
    const [showText, setShowText] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isAddingToFavorites, setIsAddingToFavorites] = useState(false);

    const dispatch = useDispatch();

    const showTextClick = (book) => {
        book.showMore = !book.showMore;
        setShowText(!showText);
    };

    const isFavorite = useSelector((state) =>
        getFavoriteStatus(state, book.id)
    );
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const toggleFavoriteStatus = () => {
        if (!isLoggedIn) {
            setShowLoginModal(true); 
            return;
        }
        if (isFavorite) {
            if (!isAddingToFavorites) {
                setIsAddingToFavorites(true);
                dispatch(removeFromFavoritesAsync(book)).then(() => {
                    setIsAddingToFavorites(false);
                    dispatch(setFavoriteStatus({ bookId: book.id, isFavorite: false }));
                    toast.error('Removed from your favorites!', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                });
            }
        } else {
            if (!isAddingToFavorites) {
                setIsAddingToFavorites(true);
                dispatch(addToFavoritesAsync(book)).then(() => {
                    setIsAddingToFavorites(false);
                    dispatch(setFavoriteStatus({ bookId: book.id, isFavorite: true }));
                    toast.success('Added to your favorites!', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                });
            }
        }
    };
    

    useEffect(() => {
        if (!isLoggedIn) {
            isFavorite && dispatch(setFavoriteStatus({ bookId: book.id, isFavorite: false }));
        } else {
            dispatch(fetchIsFavorite(book.id));
        }
    }, [dispatch, book.id, isLoggedIn, isFavorite]);
    const cartItems = useSelector( getCartItems  );

    const booksInCart = cartItems.some ( item => item.id === book.id);


    const putToCart = () => {
        if (!booksInCart) {
            dispatch (addItemToCart ({ book, quantity })); 
            const notify = () => toast.success('Added to your basket!', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            notify();
        } else {
            dispatch (updateQuantity ( {book, quantity} ) );
            const notify = () => toast.success('Added to your basket!', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            notify();
        }
    };

    return (
        <>
            <div className={styles.bookBox}>
                <div className={styles.bookImageBox}>
                    <img className={styles.bookImage} src={`./${book.img}.jpeg`} alt='a book'/>
                </div>

                <div className={styles.bookInfoBox}>
                    <h2 className={styles.bookName}>{book.name}</h2>
                    <h4 className={styles.bookAuthor}>{book.author}</h4>
                    <h3 className={styles.bookPrice}>$ {book.price}</h3> 
                    <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>   
                    <button className={styles.addToCartBtn} onClick={putToCart}>Add to cart</button>
                    <button 
                        className={`${styles.toggleFavoriteBtn} ${isAddingToFavorites ? styles.toggleFavoriteBtnClicked : ''}`}
                        onClick={toggleFavoriteStatus}
                    >
                        <FontAwesomeIcon icon={isFavorite ? fasFaHeart : farFaHeart} />
                    </button>
                    {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
                    <ToastContainer 
                        position='top-right'
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='light'
                    />
                </div>
            </div>

            <div className={styles.descriptionBox}>
                <h4 className={styles.bookAuthor}>SINOPSIS</h4>
                <p className={styles.bookDescription}>{book.showMore ? book.description : book.description.substring(0, 350) + '...'}
                    <button className={styles.showMoreBtn} onClick={() => showTextClick(book)}>{book.showMore ? 'Show less' : 'Show more'}</button>
                </p>
            </div>
            
            <div className={styles.line}></div>
        </>
    );
};


export default Book;