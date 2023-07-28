import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./componentes/NavBar/NavBar"
import { CartProvider } from "./context/CartContext"
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<h2>En Construcción</h2>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>

  )
}

export default App