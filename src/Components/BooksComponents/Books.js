import { useSelector } from "react-redux";
import dataBooks from "../data/dataBooks";
import { getSelectedCategory } from "../Redux/booksSlice";
import Book from "./Book";


const Books = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            {dataBooks.filter(book=> {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === book.category
                }
            )
            .map (
            (book, index) => 
            <Book key={index} book={book}/>
        ) }
        </div>
    )
}

export default Books;