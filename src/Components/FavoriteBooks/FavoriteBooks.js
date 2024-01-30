import { useEffect } from 'react';
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
    }, [dispatch, favoriteBooks]);

    const handleRemoveFavorite = (book) => {
        dispatch(removeFromFavoritesAsync(book));
        dispatch(setFavoriteStatus({ bookId: book.id, isFavorite: false }));
    };

    return (
        <>
            <h2>Hi {user}, hope you are having a nice day!</h2>
            <div className={styles.containerWrapper}>
                <div className={styles.container}>
                    {favoriteBooks.map(favoriteBook => (
                        <FavoriteBook 
                            favoriteBook={favoriteBook}
                            key={favoriteBook._id}
                            onRemoveFavorite={handleRemoveFavorite} 
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FavoriteBooks;