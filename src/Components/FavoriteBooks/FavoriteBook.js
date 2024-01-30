import styles from './styles.module.css';

const FavoriteBook = ({ favoriteBook, onRemoveFavorite }) => {
    return (
        <div className={styles.bookTable}>
        <div className={styles.bookTableRow}>
            <div className={styles.bookTableColumn}>
                <h4>{favoriteBook.name}</h4>
            </div>
            <div className={styles.bookTableColumn}>
                <h5>{favoriteBook.author}</h5>
            </div>
            <div className={styles.bookTableColumn}>
                <p>${favoriteBook.price}</p>
            </div>
            <div className={styles.bookTableColumn}>
                <button onClick={() => onRemoveFavorite(favoriteBook)}>Delete</button>
            </div>
        </div>
    </div>
    );
};

export default FavoriteBook;