
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../Redux/cartSlice";
import { incrementQuantityInCart } from "../Redux/cartSlice";
import { decrementQuantityInCart } from "../Redux/cartSlice";


const CartItem = ( {cartItem} ) => {

    const dispatch = useDispatch();

    
    return (
    <div>
        <div className="cart-box">
            <img src={`./${cartItem.img}.jpeg`} width="70rem" alt="a cart item"/>
                <p className="cart-name">{cartItem.name}</p>
            <p className="cart-quantity">{cartItem.quantity}</p>
            
            <div className="quantity-box">
                <button className="quantity-btn" onClick={ () => dispatch(decrementQuantityInCart ( {cartItemId: cartItem.id} )) } > 
                    <img src= {process.env.PUBLIC_URL + "extra/minus.png"}  alt="minus" width="18rem"/>
                </button>
                <span className="quantity-number">{cartItem.quantity}</span>
                <button className="quantity-btn" onClick={ () => dispatch(incrementQuantityInCart ( {cartItemId: cartItem.id}))}>
                <img src= {process.env.PUBLIC_URL + "extra/plus.png"}  alt="plus" width="18rem"/>
            </button>
            </div>

            <span onClick= { () => dispatch(removeItemFromCart( {cartItemId: cartItem.id} )) }>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25rem"
                alt="icon"/>
                </span>
            <p>$ {cartItem.price * cartItem.quantity}</p>
        </div>
    </div>

    )
}

export default CartItem;