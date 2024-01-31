import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import { getCartItems, getTotalPrice, getTotalQuantity } from '../Redux/cartSlice';
import CartItem from './CartItem';

import styles from './styles.module.css';

const Cart = () => {
    const cartItems = useSelector( getCartItems );
    const totalPrice = useSelector ( getTotalPrice );
    const fixedTotalPrice = totalPrice.toFixed(2);
    const totalQuantity = useSelector ( getTotalQuantity );

    const [value, setValue] = useState('');
    const [discount,setDiscount]=useState(0);
    
    const changeValue = (e) => {
        setValue(e.target.value.toUpperCase());     
    }

    const submitValue =(e) => {
        addPromo();
        e.preventDefault();
    }

    const addPromo = () => {
        if (value === 'LUCK') {
            setDiscount(20);
        }
        else {
            swal('Oh no!', 'This promocode does not exist!', 'error');
        }
    };

    const totalWithDiscount = (totalPrice - totalPrice * (discount/100)).toFixed(2);

    return (
        <div className={styles.cartWrapper}>
            <h2 className={styles.subTitle}>Your Basket</h2>
            {cartItems.length === 0 ? (
                <div className={styles.emptyCartBox}>
                    <h4 className={styles.cartTitle}>Your basket lacks books now. <br/>Do you feel like adding some?</h4>
                    <button className={styles.cartBtn}><Link to='/' className={styles.cartLink}>SHOP NOW</Link></button>
                </div>
            ) : (
            <div className={styles.cart}>
                {cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>)}
                
                <h3 className={styles.total}>Subtotal: $ {fixedTotalPrice}</h3>
                <h3 className={styles.total}>Total number of items: {totalQuantity}</h3> 
                <form onSubmit={submitValue} className={styles.promoBox}>
                    <input className={styles.promoInput} placeholder='Type your promo code...' value={value} onChange={changeValue} />
                    <input className={styles.promoBtn} type='submit' value='Add'/>
                    <h3 className={styles.total}>Total: $ {totalWithDiscount}</h3>
                </form>
            </div>
            )}
        </div>
    );
};

export default Cart;