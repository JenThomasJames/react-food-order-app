import { useEffect, useState } from 'react';
import styles from './CartButton.module.css';

const CartButton = props => {

    const [badgeCount, setBadgeCount] = useState(0);
    const [mealToAdd, setMealToAdd] = useState();
    // useEffect(() => {
    //     // setBadgeCount(previousState => {
    //     //     return (previousState++);
    //     // });
    //     console.log(mealToAdd);
    // }, []);
    return (
        <div>
            <button className={styles.btn}>
                <span>Cart</span>
                <span className={styles.badge}>{badgeCount}</span>
            </button>
        </div>
    );
}
export default CartButton;