import { useContext } from 'react'
import { CartProvider } from './store/CartProvider'
import CartContext from './store/cart-context'
import { Header } from './componets/Layout/Header/Header'
import { Meals } from './componets/Meals/Meals'
import { Cart } from './componets/Cart/Cart'

function App() {
  console.log('App is running...')
  const cart = useContext(CartContext)
  return (
 
      <CartProvider>
        <CartContext.Consumer>
          {(value) => value.cartState && <Cart />}
        </CartContext.Consumer>
        <Header />
        <main>
          <Meals />
        </main>
      </CartProvider>
  )
}

export default App
