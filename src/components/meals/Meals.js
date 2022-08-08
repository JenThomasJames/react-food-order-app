import { Fragment } from 'react';
import MealItem from './MealItem';
import styles from './Meals.module.css';
const Meals = props => {

    const onMealAdd = (id) => {
        props.onMealAdd(id);
    }

    return (
        <div className={styles.container}>
            {props.meals.map(meal => (
                <MealItem key={meal.id} meal={meal} onMealAdd={onMealAdd}></MealItem>
            ))};
        </div>

    );
}
export default Meals;   