import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        cartItems: [],
        favoriteItems: [], 
    },

    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push({
                ...action.payload.book,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.book.price,
            }
            )
        },
        
        toggleFavorite: (state, action) => {
            const existingIndex = state.favoriteItems.findIndex(item => item.id === action.payload.book.id);
        
            if (existingIndex >= 0) {
                // Item exists in favorites, create a new array without it
                state.favoriteItems = state.favoriteItems.filter(item => item.id !== action.payload.book.id);
            } else {
                // Item does not exist, add it to favorites by creating a new array
                state.favoriteItems = [...state.favoriteItems, action.payload.book];
            }
            console.log(state.favoriteItems);
        },
        

        updateQuantity: (state, action) => {
            const newCart = [];
            state.cartItems.forEach( item=> {
                if (item.id === action.payload.book.id) {
                    let countNew = item.quantity + action.payload.quantity
                    let totalSum = item.price * countNew;
                    const changeCart = { 
                        ...item, 
                        quantity: countNew, 
                        totalPrice: totalSum };
                    newCart.push ( changeCart );
                } 
                else {
                    newCart.push(item)
                }
            })
            state.cartItems = newCart;
        },

        incrementQuantityInCart: (state, action) => {
            const item = state.cartItems.find( (item) => 
                item.id === action.payload.cartItemId
            )
            item.quantity ++;
        },

        decrementQuantityInCart: (state, action) => {
            const item = state.cartItems.find ( (item) => 
            item.id === action.payload.cartItemId
            )
            if (item.quantity === 1) {
                item.quantity =1 
            } else {
                item.quantity --;
            }
        },

        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter (
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        },


    }
})
/*
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce( (total, cartItems) => {
        return cartItems.totalPrice + total 
    },0 )
}*/
export const getTotalPrice = state =>  {
    let totalPrice = 0
    state.cart.cartItems.forEach( item => {
        totalPrice += item.price * item.quantity
    })
    return totalPrice
}

export const getTotalQuantity = state  => {
    let totalQuantity = 0;
    state.cart.cartItems.forEach( item => {
        totalQuantity += item.quantity;
    },0 )
    return totalQuantity;
    
}


export const getCartItems = state => state.cart.cartItems;

export const { 
    addItemToCart, 
    removeItemFromCart, 
    updateQuantity, 
    incrementQuantityInCart, 
    decrementQuantityInCart,
    toggleFavorite
} = cartSlice.actions;

export default cartSlice.reducer;
