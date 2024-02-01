import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFavorites, addBookToFavorites, removeBookFromFavorites } from '../../utils/fetchData';

export const fetchIsFavorite = createAsyncThunk(
    'favorites/fetchIsFavorite',
    async (bookId) => {
        try {
            const response = await getFavorites();
            const favorites = response.data.favoriteBooks;
            const isFavorite = favorites.some((book) => book.id === bookId);
            return { bookId, isFavorite };
        } catch (error) {
            throw error;
        }
    }
);

export const fetchFavoriteBooksAsync = createAsyncThunk(
    'favorites/fetchFavoriteBooks',
    async () => {
        try {
            const response = await getFavorites();
            return response.data.favoriteBooks;
        } catch (error) {
            throw error;
        }
    }
);

export const addToFavoritesAsync = createAsyncThunk(
    'favorites/addBookToFavorites',
    async (book) => {
        try {
            const response = await addBookToFavorites(book);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const removeFromFavoritesAsync = createAsyncThunk(
    'favorites/removeBookFromFavorites',
    async (book) => {
        try {
            await removeBookFromFavorites(book.id);
            return book.id;
        } catch (error) {
            throw error;
        }
    }
);

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoriteItems: [],
        isFavorite: {},
    },
    reducers: {
        setFavoriteStatus: (state, action) => {
            const { bookId, isFavorite } = action.payload;
            state.isFavorite[bookId] = isFavorite;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchFavoriteBooksAsync.fulfilled, (state, action) => {
            const favoriteItems = action.payload;
            state.favoriteItems = favoriteItems;
        })
        .addCase(fetchIsFavorite.fulfilled, (state, action) => {
            const { bookId, isFavorite } = action.payload;
            state.isFavorite[bookId] = isFavorite;
        })
        .addCase(addToFavoritesAsync.fulfilled, (state, action) => {
            const addedBook = action.payload;
            state.favoriteItems = [...state.favoriteItems, addedBook];
        })
        .addCase(removeFromFavoritesAsync.fulfilled, (state, action) => {
            const removedBook = action.payload;
            state.favoriteItems = state.favoriteItems.filter(
                (book) => book.id !== removedBook
            );
            state.favoriteItems = [...state.favoriteItems];
        });
    },
});

export const { setFavoriteStatus } = favoritesSlice.actions;
export const getFavoriteStatus = (state, bookId) =>
    state.favorites.isFavorite[bookId] || false;

export default favoritesSlice.reducer;