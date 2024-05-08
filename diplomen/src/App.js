import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Checkout } from './pages/checkout/checkout';
import  { Cart } from './pages/cart/cart';
import { About } from './pages/about/about'
import  { Shop } from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import { FinishedOrder } from './pages/checkout/finishedOrder';
import { Start } from './pages/start/start'

function App() {
  return (
    <div className="App">
      <ShopContextProvider>      
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Start/>}></Route>
            <Route path="/shop" element={<Shop/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/finishedOrder" element={<FinishedOrder/>}></Route>
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
