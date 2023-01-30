import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../Redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

    const cartItems = useSelector( getCartItems );
    const totalPrice = useSelector ( getTotalPrice );
   console.log( cartItems.length )

    /*const totalCart = () => {
        let totalCount = 0; 
        for (let i in getCartItems) {
            totalCount += getCartItems[i].totalCount
        }
        return totalCount
    }*/

    return (
        <div className="cart-wrapper">
            <h4 className="cart-title">Your basket lacks books now. <br/>Do you feel like adding some?</h4>
            <div className="cart">
                
            {cartItems.map ( 
                (cartItem, index) => <CartItem key={index} cartItem={cartItem}/>
            )}
            
           <h3 className="total-price">Total price: $ {totalPrice}</h3>
           <h3>Total number: { cartItems.length }</h3>
        
            </div>
        </div>
    )
}

export default Cart;