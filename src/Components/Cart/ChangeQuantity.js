import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChangeQuantity = ({ quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
        const notify = () => toast("The book is added to your basket!");
            notify()
    }

    const reduceQuantity = () => {
        if (quantity <= 1) return

        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        const notify = () => toast("The book is removed from your basket!");
            notify()
    }

    return (
        <div className="quantity-box">
            <button className="quantity-btn" onClick={ reduceQuantity }> 
                <img src= {process.env.PUBLIC_URL + "extra/minus.png"}  alt="minus" width="18rem"/>
            </button>
            <span className="quantity-number">{quantity}</span>
            <button className="quantity-btn" onClick={ addQuantity }>
                <img src= {process.env.PUBLIC_URL + "extra/plus.png"}  alt="plus" width="18rem"/>
            </button>
            <ToastContainer />
        </div>
    )
}

export default ChangeQuantity;