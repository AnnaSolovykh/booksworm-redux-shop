import { useDispatch } from 'react-redux';
import { 
    removeItemFromCart, 
    incrementQuantityInCart, 
    decrementQuantityInCart 
} from '../Redux/cartSlice';

import styles from './styles.module.css';

const CartItem = ( {cartItem} ) => {
    const dispatch = useDispatch();
    const cartItemPrice = (cartItem.price * cartItem.quantity).toFixed(2);

    return (
        <>
        <div className={styles.cartBox}>
            <div className={styles.cartImageWrapper}>
                <img className={styles.cartImage} src={`./${cartItem.img}.jpeg`} alt="a cart item"/>
            </div>
    
            <div className={styles.cartInner}>
                <p className={styles.cartName}>{cartItem.name}</p>
                <div className={styles.quantityBox}>
                    <button className={`${styles.quantityBtn}`} onClick={() => dispatch(decrementQuantityInCart({ cartItemId: cartItem.id }))}>
                        <img className={styles.symbol} src={process.env.PUBLIC_URL + "extra/minus.png"} alt="minus" />
                    </button>
                    <span className={styles.quantityNumber}>{cartItem.quantity}</span>
                    <button className={styles.quantityBtn} onClick={() => dispatch(incrementQuantityInCart({ cartItemId: cartItem.id }))}>
                        <img className={styles.symbol} src={process.env.PUBLIC_URL + "extra/plus.png"} alt="plus" />
                    </button>
                </div>
            </div>
    
            <div className={styles.cartDeleteWrapper}>
                <span className={styles.iconBox} onClick={() => dispatch(removeItemFromCart({ cartItemId: cartItem.id }))}>
                    <img className={styles.icon} src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25rem" alt="icon"/>
                </span>
            </div>
    
            <div className={styles.cartPriceWrapper}>
                <p className={styles.cartPrice}>$ {cartItemPrice}</p>
            </div>
        </div>
        </>
    );
};

export default CartItem;