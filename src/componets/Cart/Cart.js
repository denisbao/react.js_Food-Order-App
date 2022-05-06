import { useContext } from 'react'
import { Modal } from '../UI/Modal/Modal'
import { CartItem } from './CartItem/CartItem'
import CartContext from '../../store/cart-context'

import classes from './Cart.module.css'

export function Cart(props) {
  const cart = useContext(CartContext)
  const totalAmount = `$${cart.totalAmount.toFixed(2)}`
  const hasItems = cart.items.length > 0

  function cartItemRemoveHandler(id) {
    cart.removeItem(id)
  }
  function cartItemAddHandler(item) {
    cart.addItem({...item, amount: 1})
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cart.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Valor Total:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Cancelar
        </button>
        {hasItems && <button className={classes.button}>Finalizar Pedido</button>}
      </div>
    </Modal>
  )
}
