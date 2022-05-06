import { AvailableMeals } from "./AvailableMeals/AvailableMeals";
import { MealsSummary } from './MealsSummary/MealsSummary';

export function Meals() {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  )
}