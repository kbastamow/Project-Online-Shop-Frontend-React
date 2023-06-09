import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import Home from './components/Home/Home'
// import Productpage from './components/Pages/Productpage/Productpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext/UserState'
import "bootstrap/dist/css/bootstrap.min.css";
import FormModal from './components/FormModal/FormModal'
import Admin from './components/Admin/Admin'
import { CategoryProvider } from './context/CategoryContext/CategoryState'
import { ProductProvider } from './context/ProductContext/ProductState'
import Products from './components/Products/Products'
import {OrderProvider} from "./context/OrderContext/OrderState"
import User from './components/User/User'
import { ModalProvider } from './context/ModalContext/ModalState'
import Profile from './components/Profile/Profile'
import AdminEdit from './components/AdminEdit/AdminEdit'



function App() {


  return (
    <>
     
      <BrowserRouter>
      <UserProvider>
      <ModalProvider>
         <ProductProvider>
            <CategoryProvider>
              <OrderProvider>
              <User></User>
              <Header></Header>
                <FormModal></FormModal>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/edit" element={<AdminEdit />} />
                <Route path="/products" element={<Products />} />
              </Routes>
              </OrderProvider>
            </CategoryProvider>
          </ProductProvider>
        </ModalProvider>
        </UserProvider>
        <Footer />
      </BrowserRouter>
  
    
    </>
  )
}

export default App
