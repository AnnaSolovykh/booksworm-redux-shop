import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../Redux/cartSlice";
import CartItem from "./CartItem";
import { getTotalQuantity } from "../Redux/cartSlice";
import { Link} from "react-router-dom";
import {  useState } from "react";
import swal from 'sweetalert';


const Cart = () => {

    const cartItems = useSelector( getCartItems );
    const totalPrice = useSelector ( getTotalPrice );
    const fixedTotalPrice = totalPrice.toFixed(2)
    const totalQuantity = useSelector ( getTotalQuantity )


    const [value, setValue] = useState("");
    const [discount,setDiscount]=useState(0);

    
    function changeValue(e) {
        setValue(e.target.value.toUpperCase());     
    }

    function submitValue(e) {
        addPromo()
        e.preventDefault();
    }

    const addPromo = () => {
        if (value === "LUCK") {
            setDiscount(20)
        }
        else {swal("Oh no!", "This promocode does not exist!", "error");
            }
    }

    const totalWithDiscount = (totalPrice - totalPrice * (discount/100)).toFixed(2)
   

    return (
        <div className="cart-wrapper">

            <h2 className="subTitle">Your Basket</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart-box">
                    <h4 className="cart-title">Your basket lacks books now. <br/>Do you feel like adding some?</h4>
                    <button className="cart-btn"><Link to="/" className='link'>SHOP NOW</Link></button>
                </div>
                    
            ) : (
             <div className="cart">
                
                {cartItems.map ( 
                    (cartItem, index) => <CartItem key={index} cartItem={cartItem}/>
                )}
        
                <h3 className="total">Subtotal: $ {fixedTotalPrice}</h3>
            {/* <h3>Total number: { getTotalQuantity().totalQuantity }</h3>  */}
                <h3 className="total">Total number of items: { totalQuantity } </h3> 
                <form onSubmit={submitValue} className="promo-box">
                    <input className="promo-input"  placeholder="Type your promo code..." value={value} onChange={ changeValue} />
                    <input className="promo-btn"  type="submit" value="Add"/>
                    {/* <button className="promo-btn" onClick={addPromo}>Add</button> */}
                    <h3 className="total">Total: $ {totalWithDiscount}</h3>
                </form>
        
            </div>
            )}

            
            
        </div>
    )
}



export default Cart;