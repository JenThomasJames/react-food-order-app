import styles from './CartButton.module.css';

const CartButton = props => {
    return (
        <div>
            <button className={styles.btn}>
                <span>Cart</span>
                <span className={styles.badge}>3</span>
            </button>
        </div>
    );
}
export default CartButton;