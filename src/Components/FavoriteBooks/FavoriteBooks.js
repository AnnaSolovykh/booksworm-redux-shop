import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteBooksAsync, removeFromFavoritesAsync, setFavoriteStatus } from '../Redux/favoritesSlice';
import FavoriteBook from './FavoriteBook';

import styles from './styles.module.css';

const FavoriteBooks = () => {
    const dispatch = useDispatch();
    const favoriteBooks = useSelector((state) => state.favorites.favoriteItems);
    const user = useSelector((state) => state.authentication.user);
    

    useEffect(() => {
        dispatch(fetchFavoriteBooksAsync());
    }, [dispatch]);

    const handleRemoveFavorite = (book) => {
        dispatch(removeFromFavoritesAsync(book))
            .then(() => {
                dispatch(fetchFavoriteBooksAsync());
            });
        dispatch(setFavoriteStatus({ bookId: book.id, isFavorite: false }));
    };

    return (
        <div className={styles.favoriteBooksWrapper}>
            <h2>Hi {user}, hope you are having a nice day!</h2>
            {favoriteBooks.length === 0 ? 
                (
                    <div className={styles.emptyFavoritesWrapper}>
                        <h3>You dont't have any favorite books yet</h3>
                        <button><Link to='/' className={styles.linkHome}>Choose Books</Link></button>
                    </div>
                ):
                (
                    <div className={styles.containerWrapper}>
                        <div className={styles.container}>
                            {favoriteBooks.map(favoriteBook => (
                                <FavoriteBook 
                                    favoriteBook={favoriteBook}
                                    key={favoriteBook.id}
                                    onRemoveFavorite={handleRemoveFavorite} 
                                />
                            ))}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FavoriteBooks;