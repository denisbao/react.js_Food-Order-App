import { useEffect, useState } from 'react';
import { Card } from '../../UI/Card/Card'
import { MealItem } from '../MealItem/MealItem';

import classes from './AvailableMeals.module.css'


export function AvailableMeals() {
  const [meals, setMeals] = useState([])
  const [isLoaging, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState(null)

  useEffect(() => {

    async function fetchMeals() {
      const response = await fetch('https://food-order-app-f43e9-default-rtdb.firebaseio.com/meals.json')
      if (!response.ok) {
        throw new Error()
      }

      const responseData = await response.json()

      const loadedMeals = []
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setMeals(loadedMeals)
    }

    // this fucntion returns a promisse and we can't use await here becouse of the useEffect
    fetchMeals().catch(error => {
      setIsLoading(false)
      setHttpError('Sorry... Something went wrong.')
    })

    setIsLoading(false)
  }, []);

  if (isLoaging) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading Meals...</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }

  const mealsList = meals.map(meal => 
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