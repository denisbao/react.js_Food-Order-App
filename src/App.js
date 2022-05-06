import { useState } from 'react'
import { CartProvider } from './store/CartProvider';
import { Header } from './componets/Layout/Header/Header';
import { Meals } from './componets/Meals/Meals';
import { Cart } from './componets/Cart/Cart'

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  function showCartHandler() {
    setCartIsShown(true)
  }
  function hideCartHandler() {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
