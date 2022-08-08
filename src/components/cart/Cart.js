import styles from './Cart.module.css';

import Modal from '../shared/Modal';

const Cart = () => {
    return (
        <Modal className={styles.cart}>
            <div>
                <h1>Total Amount: $43.22</h1>
            </div>
        </Modal>
    );
}
export default Cart;