import { Fragment } from 'react';
import styles from './NumberInput.module.css';

const NumberInput = props => {
    return (
        <Fragment>
            <input className={styles['number-input']} type="number" min="1" max="10" defaultValue="1"/>
        </Fragment>
    );
}
export default NumberInput;