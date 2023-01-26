import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="categories-box">
            { ['ALL','NOVELS', 'HISTORY', 'PSYCHOLOGY', 'ADVENTURE', 'DETECTIVES'].map (
                (category, index) =>
                <Filter key={index} category={category}/>
            )}
        
        </div>

        
    )
}

export default AllCategories;