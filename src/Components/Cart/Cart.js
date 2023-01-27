import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../Redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

    const cartItems = useSelector( getCartItems );
    const totalPrice = useSelector ( getTotalPrice );

    return (
        <div className="cart-wrapper">
            <h4 className="cart-title">Your basket lacks books now. <br/>Do you feel like adding some?</h4>
            <div className="cart">
                
            {cartItems.map ( 
                (cartItem, index) => <CartItem key={index} cartItem={cartItem}/>
            )}
            
           <h3 className="total-price">Total price: $ {totalPrice}</h3>
            </div>
        </div>
    )
}

export default Cart;