import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteBooksAsync, removeFromFavoritesAsync, setFavoriteStatus } from '../Redux/favoritesSlice';
import FavoriteBook from './FavoriteBook';

const FavoriteBooks = () => {
    const dispatch = useDispatch();
    const favoriteBooks = useSelector((state) => state.favorites.favoriteItems);

    useEffect(() => {
        dispatch(fetchFavoriteBooksAsync());
    }, [dispatch, favoriteBooks]);

    const handleRemoveFavorite = (book) => {
        dispatch(removeFromFavoritesAsync(book));
        dispatch(setFavoriteStatus({ bookId: book.id, isFavorite: false }));
    };

    return (
        <div>
            {favoriteBooks.map(favoriteBook => (
                <FavoriteBook 
                    favoriteBook={favoriteBook}
                    key={favoriteBook._id}
                    onRemoveFavorite={handleRemoveFavorite} 
                />
            ))}
        </div>
    );
};

export default FavoriteBooks;