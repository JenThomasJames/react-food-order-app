import { Fragment, useRef } from 'react';
import styles from './NumberInput.module.css';

const NumberInput = props => {

    let quantityRef = useRef(1);

    const getQuantity = () => {
        props.onQuantityUpdate(quantityRef.current.value);
    }

    return (
        <Fragment>
            <input
                className={styles['number-input']}
                type="number"
                min="1"
                max="10"
                ref={quantityRef}
                onChange={getQuantity}
                defaultValue={props.initialValue} />
        </Fragment>
    );
}
export default NumberInput;