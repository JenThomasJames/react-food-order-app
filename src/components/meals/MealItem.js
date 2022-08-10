import styles from './MealItem.module.css';

import Button from '../shared/Button';
import NumberInput from '../shared/NumberInput';

const MealItem = props => {

    const addToCartHandler = () => {
        props.onMealAdd(props.meal.id);
    }

    return (
        <div className={styles.item}>
            <div className={styles['item-image']} >
                <img className={styles.image} src={props.meal.imageUrl} alt={props.meal.id} />
            </div>
            <div className={styles['item-description']}>
                <h1>{props.meal.title}</h1>
            </div>
            <div className={styles['item-action']}>
                <h1 className={styles['price-tag']}>₹{props.meal.price}/-</h1>
                <NumberInput />
                <Button text="Add to Cart" onClick={addToCartHandler} />
            </div>
        </div>
    );
}
export default MealItem;