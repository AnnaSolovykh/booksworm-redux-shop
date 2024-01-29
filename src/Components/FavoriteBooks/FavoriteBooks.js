import { useState, useEffect } from 'react';
import { getFavorites } from '../../utils/fetchData';
import FavoriteBook from '../FavoriteBooks/FavoriteBook';

const FavoriteBooks = () => {
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    useEffect(() => {
        getFavorites()
        .then(response => {
            setFavoriteBooks(response.data.favoriteBooks);
            console.log(response.data.favoriteBooks)
        })
        .catch(error => {
            console.log(error)
        });
    }, []);

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
}

export default FavoriteBooks;