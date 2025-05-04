import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { CartProvider } from './components/CartContext'
import { About } from './pages/About'
import { ContactUs } from './pages/ContactUs'
import './App.css'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
