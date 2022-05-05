import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css'
import { CartIcon } from '../Cart/CartIcon';

export function HeaderCartButton(props) {

  const cart = useContext(CartContext)

  const numberOfCartItems = cart.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}