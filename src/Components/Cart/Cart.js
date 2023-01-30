import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../Redux/cartSlice";
import CartItem from "./CartItem";
import { getTotalQuantity } from "../Redux/cartSlice";
import { Link} from "react-router-dom";
//import { useEffect, useState, useDispatch } from "react";
import { useState } from "react";
import swal from 'sweetalert';


const Cart = () => {
  //  const dispatch = useDispatch();

    const cartItems = useSelector( getCartItems );
    const totalPrice = useSelector ( getTotalPrice );
    const fixedTotalPrice = totalPrice.toFixed(2)
    const totalQuantity = useSelector ( getTotalQuantity )

/*
    const getTotalQuantity = () => {
        let totalQuantity = 0;
        cartItems.forEach( item => {
            totalQuantity += item.quantity;
        })
        return {totalQuantity}
        
    }
    */
    const [value, setValue] = useState();
    const [discount,setDiscount]=useState(0)
    
    function changeValue(e) {
        setValue(e.target.value.toUpperCase()); 
        e.preventDefault();

    }

    const addPromo = () => {
        if (value === "LUCK") {
            setDiscount(20)
        }
        else {swal("Oh no!", "This promocode does not exist!", "success");
            }
    }
/*
    useEffect(() => {
        dispatch(getTotalPrice());
    }, [cartItems, dispatch]);*/

    const totalWithDiscount = totalPrice - totalPrice * (discount/100)


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
        
                <h3 className="total">Total price: $ {fixedTotalPrice}</h3>
            {/* <h3>Total number: { getTotalQuantity().totalQuantity }</h3>  */}
                <h3 className="total">Total number of items: { totalQuantity } </h3> 
                <div className="promo-box">
                    <input className="promo-input" placeholder="Type your promo code..." value={value} onChange={changeValue} />
                    <button className="promo-btn" onClick={addPromo}>Add</button>
                    <h3 className="total">Final price with the discount: $ {totalWithDiscount}</h3>
                </div>
        
            </div>
            )}

            
            
        </div>
    )
}



export default Cart;