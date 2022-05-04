import CartContext from './cart-context'

export function CartProvider(props) {

  function addItemToCartHandler(item) {

  } 
  function removeItemFromCartHandler(id) {

  }

  const cartContext = {
    itens: [],
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