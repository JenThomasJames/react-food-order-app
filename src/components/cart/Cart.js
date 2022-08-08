import styles from './Cart.module.css';

import Modal from '../shared/Modal';

const Cart = (props) => {
    return (
        <Modal onHideModal={props.onHideModal} className={styles.cart}>
            <div>
                <h1>Total Amount: $43.22</h1>
            </div>
        </Modal>
    );
}
export default Cart;