import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './CartItem.module.css';
const CartItem = (props) => {

    const cartContext = useContext(CartContext);
    console.log(cartContext.items[0].quantity);
    return (
        <div className={styles['cart-item']}>
            <img className={styles.image} src={props.item.imageUrl} alt={props.item.id} />
            <div className={styles['item-details']}>
                <h3>{props.item.title}</h3>
                <h3>${props.item.price} &times; {props.item.quantity}</h3>
            </div>
        </div>
    );
}
export default CartItem;