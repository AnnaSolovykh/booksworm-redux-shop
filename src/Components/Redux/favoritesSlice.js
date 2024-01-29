import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFavorites, addBookToFavorites, removeBookFromFavorites } from '../../utils/fetchData';

export const fetchIsFavorite = createAsyncThunk(
    "favorites/fetchIsFavorite",
    async (bookId) => {
        return getFavorites()
            .then((response) => {
                const favorites = response.data.favoriteBooks; 
                const isFavorite = favorites.some((book) => book.id === bookId);
                return { bookId, isFavorite };            
            })
            .catch((error) => {
                console.error("Error fetching isFavorite status:", error);
                throw error; 
            });
        }
    );

export const fetchFavoriteBooksAsync = createAsyncThunk(
        'favorites/fetchFavoriteBooks',
        async () => {
            const response = await getFavorites();
            return response.data.favoriteBooks;
        }
    );

export const addToFavoritesAsync = createAsyncThunk(
    'favorites/addBookToFavorites',
    async (book) => {
        return addBookToFavorites(book)
            .then((response) => {
                return response.data; 
            })
            .catch((error) => {
                console.log(error);
                throw error; 
            });
    }
);

export const removeFromFavoritesAsync = createAsyncThunk(
    'favorites/removeBookFromFavorites',
    async (book) => {
        return removeBookFromFavorites(book.id)
            .then(() => {
                return book.id;
            })
            .catch((error) => {
                console.log(error);
                throw error;
            });
    }
);


export const favoritesSlice = createSlice({
    name: "favorites",
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
                (book) => book.id === removedBook
            );
            state.favoriteItems = [...state.favoriteItems];
        });
    },
});

export const { setFavoriteStatus } = favoritesSlice.actions;
export const getFavoriteStatus = (state, bookId) =>
    state.favorites.isFavorite[bookId] || false;


export default favoritesSlice.reducer;