import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './CartButton.module.css';

const CartButton = props => {

    const ctx = useContext(CartContext);
    let numberOfItems = ctx.items.length;

    return (
        <div>
            <button className={styles.btn} onClick={props.onClick}>
                <span>Cart</span>
                <span className={styles.badge}>{numberOfItems}</span>
            </button>
        </div>
    );
}
export default CartButton;