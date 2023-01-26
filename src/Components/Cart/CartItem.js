
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../Redux/cartSlice";


const CartItem = ( {cartItem} ) => {

    const dispatch = useDispatch();
    
    return (
       <div className="cart-box">
            <img src={`./${cartItem.img}.jpeg`} width="70rem" alt="a cart item"/>
                <p className="cart-name">{cartItem.name}</p>
            <p className="cart-quantity">{cartItem.quantity}</p>
            <span onClick= { () => dispatch(removeItemFromCart( {cartItemId: cartItem.id} )) }>
                <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25rem"
                 alt="icon"/>
                </span>
            <p>$ {cartItem.price * cartItem.quantity}</p>

       </div>


    )
}

export default CartItem;