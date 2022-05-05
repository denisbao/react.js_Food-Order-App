import { useReducer } from 'react'
import CartContext from './cart-context'

// REDUCER ========================
const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD_MEAL') {
    // update total price amount of the cart:
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    // verify if the item being added already exists in the cart:
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    // if the item already exists, the item remains the same but the amount is increased:
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }
    // if the item is been added to the cart for the first time 
    else {
      updatedItems = state.items.concat(action.item)
    }

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