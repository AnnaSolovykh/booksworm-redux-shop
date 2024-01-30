import { useState } from 'react';
import Filter from './Filter';

const AllCategories = () => {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <div>
            <button 
                className='filter-btn-mobile' 
                onClick={ () => setShowCategories(!showCategories)
            }>
                FILTER
            </button>
            <div 
                className={showCategories ? 'categories-box-mobile' : 'categories-box'}
                onClick={ () => setShowCategories(false)}
            >
                { ['ALL','NOVELS', 'HISTORY', 'PSYCHOLOGY', 'ADVENTURE', 'DETECTIVES'].map (
                    (category, index) =>
                    <Filter key={index} category={category}/>
                )}
            </div>
        </div>
        
    );
};

export default AllCategories;