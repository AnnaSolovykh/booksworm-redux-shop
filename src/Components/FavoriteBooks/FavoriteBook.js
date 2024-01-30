const FavoriteBook = ({ favoriteBook }) => {
    return (
        <div>
            <p>{favoriteBook.name}</p>
            <p>{favoriteBook.author}</p>
            <p>{favoriteBook.price}</p>
        </div>
    );
};

export default FavoriteBook;