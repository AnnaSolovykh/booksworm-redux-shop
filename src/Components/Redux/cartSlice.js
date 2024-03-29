import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        cartItems: []
    },

    reducers: {
        addItemToCart: (state, action) => {
            state.cartItems.push({
                ...action.payload.book,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.book.price,
            }
            );
        },
        
        updateQuantity: (state, action) => {
            const newCart = [];
            state.cartItems.forEach( item=> {
                if (item.id === action.payload.book.id) {
                    let countNew = item.quantity + action.payload.quantity;
                    let totalSum = item.price * countNew;
                    const changeCart = { 
                        ...item, 
                        quantity: countNew, 
                        totalPrice: totalSum };
                    newCart.push ( changeCart );
                } 
                else {
                    newCart.push(item);
                }
            });
            state.cartItems = newCart;
        },

        incrementQuantityInCart: (state, action) => {
            const item = state.cartItems.find( (item) => 
                item.id === action.payload.cartItemId
            );
            item.quantity ++;
        },

        decrementQuantityInCart: (state, action) => {
            const item = state.cartItems.find ( (item) => 
            item.id === action.payload.cartItemId
            );
            if (item.quantity === 1) {
                item.quantity =1; 
            } else {
                item.quantity --;
            }
        },

        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter (
                cartItem => cartItem.id !== action.payload.cartItemId
            );
        },


    }
});

export const getTotalPrice = state =>  {
    let totalPrice = 0;
    state.cart.cartItems.forEach( item => {
        totalPrice += item.price * item.quantity;
    });
    return totalPrice;
};

export const getTotalQuantity = state  => {
    let totalQuantity = 0;
    state.cart.cartItems.forEach( item => {
        totalQuantity += item.quantity;
    },0 );
    return totalQuantity;
    
};

export const getCartItems = state => state.cart.cartItems;

export const { 
    addItemToCart, 
    removeItemFromCart, 
    updateQuantity, 
    incrementQuantityInCart, 
    decrementQuantityInCart,
} = cartSlice.actions;

export default cartSlice.reducer;
