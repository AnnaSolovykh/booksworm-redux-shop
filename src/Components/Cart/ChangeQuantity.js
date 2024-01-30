import styles from './styles.module.css';

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
        <div className={styles.quantityBox}>
            <button className={styles.quantityBtn} onClick={reduceQuantity}> 
                <img className={styles.symbolQuantityBook} src={`${process.env.PUBLIC_URL}/extra/minus.png`} alt="minus" />
            </button>
            <span className={styles.quantityNumberBook}>{quantity}</span>
            <button className={styles.quantityBtn} onClick={addQuantity}>
                <img className={styles.symbolQuantityBook} src={`${process.env.PUBLIC_URL}/extra/plus.png`} alt="plus"/>
            </button>
        </div>
    );
};

export default ChangeQuantity;