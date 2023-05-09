import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Pages/Homepage/Homepage'
import Productpage from './components/Pages/Productpage/Productpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/products" element={<Productpage/>}/>
    </Routes>
    <Footer/> 
    </BrowserRouter>
    </>
  )
}

export default App
