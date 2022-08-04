import styles from './MealItem.module.css';
const MealItem = props => {
    return (
        <div className={styles.item}>
            <div className={styles['item-image']} >
                <img className={styles.image} src={props.meal.imageUrl} />
            </div>
            <div className={styles['item-description']}>
                <h1>{props.meal.title}</h1>
            </div>
            <div className={styles['item-action']}>
                <h1 className={styles['price-tag']}>₹{props.meal.price}/-</h1>
                <button className={styles['btn-add']}>Add to Cart</button>
            </div>
        </div>
    );
}
export default MealItem;