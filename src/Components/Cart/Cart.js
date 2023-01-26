import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../Redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

    const cartItems = useSelector( getCartItems );
    const totalPrice = useSelector ( getTotalPrice );

    return (
        <div className="cart-wrapper">
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