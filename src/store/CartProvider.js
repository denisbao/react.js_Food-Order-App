import CartContext from './cart-context'

export function CartProvider(props) {

  function addItemToCartHandler(item) {

  } 
  function removeItemFromCartHandler(id) {

  }

  // Helper constant, creating the object passed to the provider
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}