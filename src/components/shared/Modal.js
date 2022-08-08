import styles from './Modal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = () => {
    return (
        <div className={styles.backdrop}></div>
    );
}

const ModalDialog = (props) => {
    return (
        <div className={styles.modal}>
            <div>
                {props.children}
            </div>
        </div>
    );
}

const Modal = () => {

    const overlayPortal = document.getElementById('overlays');

    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalDialog>
                <h1>Total Amount: $12.22</h1>
                <div className={styles['btn-wrapper']}>
                    <button className={styles.close}>Order</button>
                    <button className={styles.close}>Close</button>
                </div>
            </ModalDialog>, overlayPortal)}
            {ReactDOM.createPortal(<Backdrop />, overlayPortal)}
        </Fragment>
    );
}
export default Modal;