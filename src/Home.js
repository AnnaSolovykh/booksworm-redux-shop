import Books from './Components/BooksComponents/Books';
import AllCategories from './Components/Filter/AllCategories';

const Home = () => {
    return (
    <div>
        <div className='block'>
            <AllCategories />
        </div>
        <div className='block'>
            <Books />
        </div>
    </div>
    );
};

export default Home;