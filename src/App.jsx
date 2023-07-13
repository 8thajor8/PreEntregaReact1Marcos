import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import './styles/style.scss'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './components/Error404'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Checkout from './components/Checkout'




function App() {

  
  return (
    <CartProvider>
      <BrowserRouter>
      
        <NavBar />

        <Routes>
          <Route path="/"  element={ <ItemListContainer/>} />
          <Route path="/products"  element={ <ItemListContainer />} />
          <Route path="/products/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail"  element={ <ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart"  element={ <Cart />} />
          <Route path="/checkout"  element={ <Checkout />} />

          <Route path="*" element={<Error404/>}/>
        </Routes>

      </BrowserRouter>    
    </CartProvider>  
  )
}

export default App
