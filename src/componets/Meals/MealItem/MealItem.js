import { MealItemForm } from './MealItemForm/MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

import classes from './MealItem.module.css'

export function MealItem(props) {
  const cart = useContext(CartContext)
  const price = `R$ ${props.price.toFixed(2)}`

  function addToCartHandler(amount) {
    cart.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  )
}