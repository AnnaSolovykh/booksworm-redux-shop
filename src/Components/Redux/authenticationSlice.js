import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, 
    isLoggedIn: false, 
};

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        removeUser: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setUser, removeUser } = authenticationSlice.actions;
export const selectUser = (state) => state.authentication.user;
export const selectIsLoggedIn = (state) => state.authentication.isLoggedIn;

export default authenticationSlice.reducer;
