import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import ChangeQuantity from "../Cart/ChangeQuantity"
import { addItemToCart, getCartItems, updateQuantity } from "../Redux/cartSlice"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = ({book}) => {

    const [showText, setShowText] = useState(false)
    const showTextClick = (book) => {
        book.showMore = !book.showMore
        setShowText(!showText)
    }

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const cartItems = useSelector( getCartItems  )

    const booksInCart = cartItems.some ( item => item.id === book.id)


    const putToCart = () => {
        if (!booksInCart) {
            dispatch (addItemToCart ( {book, quantity} )) 
            const notify = () => toast.success("Added to your basket!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            notify()
        } else {
            dispatch (updateQuantity ( {book, quantity} ) )
            const notify = () => toast.success("Added to your basket!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            notify()
        }
    }


    return (
        <div>

        <div className="book-box">

            <div className="book-image-box">
                <img className="book-image" src={`./${book.img}.jpeg`} alt="a book"/>
            </div>

            <div className="book-info-box">
                <h2 className="book-name">{book.name}</h2>
                <h4 className="book-author">{book.author}</h4>
                <h3 className="book-price">$ {book.price}</h3> 
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>   
                <button className="add-to-cart-btn" onClick= { putToCart } >Add to cart</button>
                <ToastContainer 

                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
             />
                
            </div>
            </div>

            <div className="description-box">
                <h4 className="book-author">SINOPSIS</h4>
                <p className="book-description">{book.showMore ? book.description: book.description.substring(0, 350)+ "..."}
                <button className="show-more-btn" onClick={ () => showTextClick(book)}>{book.showMore ? "Show less" : "Show more"}</button>
                </p>
            </div>
            
        

        <div className="line"></div>
        </div>
    )
}

export default Book;