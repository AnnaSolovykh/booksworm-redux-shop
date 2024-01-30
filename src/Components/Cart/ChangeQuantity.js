const ChangeQuantity = ({ quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    };

    const reduceQuantity = () => {
        if (quantity <= 1) return;

        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    };

    return (
        <div className="quantity-box">
            <button className="quantity-btn" onClick={ reduceQuantity }> 
                <img className="symbol-quantity-book"  src= {process.env.PUBLIC_URL + "extra/minus.png"}  alt="minus" />
            </button>
            <span className="quantity-number-book">{quantity}</span>
            <button className="quantity-btn" onClick={ addQuantity }>
                <img className="symbol-quantity-book"   src= {process.env.PUBLIC_URL + "extra/plus.png"}  alt="plus"/>
            </button>
        </div>
    );
};

export default ChangeQuantity;