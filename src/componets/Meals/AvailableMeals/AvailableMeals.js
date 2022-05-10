import { Card } from '../../UI/Card/Card'
import { MealItem } from '../MealItem/MealItem';

import { DUMMY_MEALS } from '../../../data/dummy-meals'

import classes from './AvailableMeals.module.css'


export function AvailableMeals() {
  console.log('AvailableMelas is running...')
  const mealsList = DUMMY_MEALS.map(meal => 
    <MealItem 
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  )

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}