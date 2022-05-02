import { Header } from './componets/Layout/Header';
import { Meals } from './componets/Meals/Meals';
import { Cart } from './componets/Cart/Cart'

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
