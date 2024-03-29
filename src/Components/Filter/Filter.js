import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../Redux/booksSlice';

import styles from './styles.module.css';

const Filter = ({category}) => {
    const dispatch = useDispatch(); 
    const selectedCategory = useSelector(getSelectedCategory);

    const handleCategoryClick = () => {
        dispatch(filterCategory(category));
    };

    return (
        <div>
            <p 
                onClick={handleCategoryClick} 
                className={selectedCategory === category ? `${styles.categoryButtonSelected} ${styles.categoryButton}` : styles.categoryButton}
            >
                {category}
            </p>
        </div>
    );
};

export default Filter;
