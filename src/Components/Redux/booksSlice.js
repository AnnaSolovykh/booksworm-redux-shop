import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice( {

    name: 'books',
    initialState: {
        selectedCategory: 'NOVELS',
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const getSelectedCategory = state => state.books.selectedCategory;
export const { filterCategory } = booksSlice.actions;
export default booksSlice.reducer;

