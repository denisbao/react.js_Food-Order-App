import { useReducer } from 'react'
import CartContext from './cart-context'

// REDUCER ========================
const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_MEAL') {
    const updatedItems = state.items.concat(action.item)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  
  return defaultCartState
}
// REDUCER ========================

export function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  function addItemToCartHandler(handledItem) {
    dispatchCartAction({type: 'ADD_MEAL', item: handledItem})
  } 
  function removeItemFromCartHandler(handledId) {
    dispatchCartAction({type: 'REMOVE_MEAL', id: handledId})
  }

  // Helper constant, creating the object passed to the provider
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}