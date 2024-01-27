import { useState, useEffect } from 'react';
import { getBooks } from '../../utils/fetchData';
import FavoriteBook from '../FavoriteBooks/FavoriteBook';

const FavoriteBooks = () => {
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    useEffect(() => {
        getBooks()
        .then(response => {
            setFavoriteBooks(response.data.favoriteBooks);
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