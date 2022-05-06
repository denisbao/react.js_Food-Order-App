import { useContext, useEffect, useState } from 'react';
import CartContext from '../../../store/cart-context';

import classes from './HeaderCartButton.module.css'
import { CartIcon } from '../../UI/Icons/CartIcon';

export function HeaderCartButton(props) {
  const cart = useContext(CartContext)
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false)

  const { items } = cart
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setButtonIsHighlighted(true)

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false)
    }, 300)
    
    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onShowCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}