import './App.css'
import { Cart } from './components/Cart'
import { Filters } from './components/Filters'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { CartProvider } from './context/cart'
import { FiltersProvider } from './context/filters'

function App() {
  return (
    <CartProvider>
      <Header/>
      <Cart></Cart>
      <FiltersProvider>
        <Filters/>
        <Products/>
        <Footer/>
      </FiltersProvider>
    </CartProvider>
  )
}

export default App
