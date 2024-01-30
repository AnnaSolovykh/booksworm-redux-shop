import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, getSelectedCategory } from '../Redux/booksSlice';

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
                className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}
            >
                {category}
            </p>
        </div>
    );
};

export default Filter;
