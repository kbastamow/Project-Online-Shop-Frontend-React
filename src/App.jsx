import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Homepage from './components/Pages/Homepage/Homepage'
import Productpage from './components/Pages/Productpage/Productpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserContext/UserState'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


  return (
    <>
    <BrowserRouter>
    <UserProvider>
    <Login></Login>
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
