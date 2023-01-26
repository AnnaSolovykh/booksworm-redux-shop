import { configureStore } from "@reduxjs/toolkit";
import books from './booksSlice';
import cart from './cartSlice';



export const store = configureStore( {
    reducer: {
        books,
        cart
    },
}
)