import { useState } from 'react';
import Filter from './Filter';

import styles from './styles.module.css';

const AllCategories = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <div>
            <button 
                className={styles.filterBtnMobile} 
                onClick={ () => setShowCategories(!showCategories)
            }>
                FILTER
            </button>
            <div 
                className={showCategories ? styles.categoriesBoxMobile : styles.categoriesBox}
                onClick={ () => setShowCategories(false)}
            >
                { ['ALL','NOVELS', 'HISTORY', 'PSYCHOLOGY', 'ADVENTURE', 'DETECTIVES'].map (
                    (category, id) =>
                    <Filter key={id} category={category}/>
                )}
            </div>
        </div>
        
    );
};

export default AllCategories;