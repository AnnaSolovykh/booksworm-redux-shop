const FavoriteBook = ({ favoriteBook, onRemoveFavorite }) => {
    return (
        <div>
            <p>{favoriteBook.name}</p>
            <p>{favoriteBook.author}</p>
            <p>{favoriteBook.price}</p>
            <button onClick={() => onRemoveFavorite(favoriteBook)}>Delete from Favorites</button>
        </div>
    );
};

export default FavoriteBook;