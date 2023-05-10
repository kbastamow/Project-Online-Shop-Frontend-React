import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import Homepage from './components/Pages/Homepage/Homepage'
import Productpage from './components/Pages/Productpage/Productpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext/UserState'
import "bootstrap/dist/css/bootstrap.min.css";
import FormModal from './components/FormModal/FormModal'

function App() {


  return (
    <>
    <BrowserRouter>
    <UserProvider>
    <FormModal></FormModal>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/products" element={<Productpage/>}/>
    </Routes>
    </UserProvider>
    <Footer/> 
    </BrowserRouter>
    </>
  )
}

export default App
