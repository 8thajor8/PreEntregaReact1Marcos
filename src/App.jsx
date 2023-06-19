import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import './styles/style.scss'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error404 from './components/Error404'


function App() {
  return (
    <BrowserRouter>
    
      <NavBar />

      <Routes>
        <Route path="/"  element={ <ItemListContainer/>} />
        <Route path="/products"  element={ <ItemListContainer />} />
        <Route path="/products/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail"  element={ <ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error404/>}/>
      </Routes>

    </BrowserRouter>      
  )
}

export default App
