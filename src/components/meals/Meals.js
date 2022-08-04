import { Fragment } from 'react';
import MealItem from './MealItem';
import styles from './Meals.module.css';
const Meals = props => {
    return (
        <div className={styles.container}>
            {props.meals.map(meal => (
                <MealItem key={meal.id} meal={meal}></MealItem>
            ))};
        </div>

    );
}
export default Meals;   