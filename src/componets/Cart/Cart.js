import { useContext, useState } from 'react'
import { Modal } from '../UI/Modal/Modal'
import { CartItem } from './CartItem/CartItem'
import CartContext from '../../store/cart-context'
import Checkout from './Checkout/Checkout'

import classes from './Cart.module.css'

export function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const cart = useContext(CartContext)
  const totalAmount = `$${cart.totalAmount.toFixed(2)}`
  const hasItems = cart.items.length > 0

  function cartItemRemoveHandler(id) {
    cart.removeItem(id)
  }
  function cartItemAddHandler(item) {
    cart.addItem({ ...item, amount: 1 })
  }
  function orderHandler() {
    setIsCheckout(true)
  }

  // Send order to Firebase
  async function submitOrderHandler(userData) {
    setIsSubmitting(true)
    await fetch(
      'https://food-order-app-f43e9-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cart.items,
        }),
      }
    )
    setIsSubmitting(false)
    setDidSubmit(true)
    cart.clearCart()
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Cancelar
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Finalizar Pedido
        </button>
      )}
    </div>
  )

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Valor Total:</span>
        <span>{totalAmount}</span>
      </div>
      {/* {isCheckout : <Checkout /> : modalActions} */}
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  )

  const isSubmittingModalContent = <p>Sending order...</p>
  const didSubmitModalContent = (
    <>
      <p>Successfuly sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}
