import './App.css'
import Cart from './components/Cart';
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const router = (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Navbar/><CartContainer/></>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );


  return (
    <>
    {router}
    </>
  )
}

export default App
