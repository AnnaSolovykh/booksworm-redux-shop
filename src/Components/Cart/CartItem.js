
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../Redux/cartSlice";
import { incrementQuantityInCart } from "../Redux/cartSlice";
import { decrementQuantityInCart } from "../Redux/cartSlice";


const CartItem = ( {cartItem} ) => {

    const dispatch = useDispatch();
    const cartItemPrice = (cartItem.price * cartItem.quantity).toFixed(2)

    
    return (
    <div>
        <div className="cart-box">
            <div className="cart-image-wrapper">
            <img className="cart-image" src={`./${cartItem.img}.jpeg`} alt="a cart item"/>
            </div>

            <div className="cart-inner">
                <p className="cart-name">{cartItem.name}</p>
                <div className="quantity-box">
                <button className="quantity-btn " onClick={ () => dispatch(decrementQuantityInCart ( {cartItemId: cartItem.id} )) } > 
                    <img className="symbol" src= {process.env.PUBLIC_URL + "extra/minus.png"}  alt="minus" />
                </button>
                <span className="quantity-number  ">{cartItem.quantity}</span>
                <button className="quantity-btn" onClick={ () => dispatch(incrementQuantityInCart ( {cartItemId: cartItem.id}))}>
                    <img className="symbol" src= {process.env.PUBLIC_URL + "extra/plus.png"}  alt="plus" />
                </button>
            </div>
            </div>

            <div className="cart-delete-wrapper">
            <span className="icon-box" onClick= { () => dispatch(removeItemFromCart( {cartItemId: cartItem.id} )) }>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25rem"
                alt="icon"/>
            </span>
            </div>


            <div className="cart-price-wrapper">
            <p className="cart-price">$ {cartItemPrice}</p>
            </div>
        </div>
    </div>

    )
}

export default CartItem;