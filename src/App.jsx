import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import Homepage from './components/Pages/Homepage/Homepage'
// import Productpage from './components/Pages/Productpage/Productpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext/UserState'
import "bootstrap/dist/css/bootstrap.min.css";
import FormModal from './components/FormModal/FormModal'
import Admin from './components/Admin/Admin'
import { CategoryProvider } from './context/CategoryContext/CategoryState'
import { ProductProvider } from './context/ProductContext/ProductState'
import Products from './components/Products/Products'
import CartModal from './components/CartModal/CartModal'
import {OrderProvider} from "./context/OrderContext/OrderState"

function App() {


  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <CategoryProvider>
              <OrderProvider>
              <FormModal></FormModal>
              <CartModal></CartModal>
              <Header></Header>
            
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/products" element={<Products />} />
              </Routes>
              </OrderProvider>
            </CategoryProvider>
          </ProductProvider>
        </UserProvider>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
