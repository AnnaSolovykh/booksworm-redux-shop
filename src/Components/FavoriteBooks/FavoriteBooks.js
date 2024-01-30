import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFavoriteBooksAsync } from '../Redux/favoritesSlice';
import FavoriteBook from './FavoriteBook';

const FavoriteBooks = () => {
    const dispatch = useDispatch();
    const favoriteBooks = useSelector((state) => state.favorites.favoriteItems);

    useEffect(() => {
        dispatch(fetchFavoriteBooksAsync());
    }, [dispatch]);

    return (
        <div>
            {favoriteBooks.map(favoriteBook => (
                <FavoriteBook 
                    favoriteBook={favoriteBook}
                    key={favoriteBook._id} 
                />
            ))}
        </div>
    );
};

export default FavoriteBooks;