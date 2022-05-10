import { AvailableMeals } from "./AvailableMeals/AvailableMeals";
import { MealsSummary } from './MealsSummary/MealsSummary';

export function Meals() {
  console.log('Meals is running...')
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}