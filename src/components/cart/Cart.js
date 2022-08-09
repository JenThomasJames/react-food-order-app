import styles from './Cart.module.css';

import Modal from '../shared/Modal';
import Button from '../shared/Button';
import CartContext from '../../store/cart-context'
import { useContext } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartContext = useContext(CartContext);

    return (
        <Modal onHideModal={props.onHideModal} className={styles.cart}>
            <div className={styles['heading-container']}>
                <h1 className={styles.title}>Your Shopping Cart</h1>
            </div>
            {
                cartContext.items.length > 0 &&
                <div>
                    <div className={styles.items}>
                        {cartContext.items.map((item) =>
                            <CartItem key={item.id} item={item} />
                        )}
                    </div>
                    <hr />
                    <div className={styles['wrapper']}>
                        <h2>Total: ${cartContext.totalAmount}</h2>
                        <Button text="Confirm Order" onClick={props.onHideModal} />
                    </div>
                </div>
            }
            {
                cartContext.items.length === 0 &&
                <div className={styles['empty-cart']}>
                    <h1>Your cart is empty!</h1>
                </div>
            }
        </Modal>
    );
}
export default Cart;