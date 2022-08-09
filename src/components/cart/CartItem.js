import styles from './CartItem.module.css';
const CartItem = (props) => {
    return (
        <div className={styles['cart-item']}>
            <img className={styles.image} src={props.item.imageUrl} alt={props.item.id} />
            <div className={styles['item-details']}>
                <h3>{props.item.title}</h3>
                <h3>${props.item.price}</h3>
                <input type="text" readOnly={true} value={props.item.quantity} />
            </div>
        </div>
    );
}
export default CartItem;