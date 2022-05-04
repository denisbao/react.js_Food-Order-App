import React from 'react'

// for better auto-completion, the values are initialized here
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
})

export default CartContext