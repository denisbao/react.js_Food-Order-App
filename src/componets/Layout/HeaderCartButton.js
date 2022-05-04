import classes from './HeaderCartButton.module.css'

import { CartIcon } from '../Cart/CartIcon';

export function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}