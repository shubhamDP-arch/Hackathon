import { useState } from 'react'
import Login from './Components/Login'
import Logout from './Components/Logout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import Dashboard from './Components/Dashboard';
import BarcodeScanner from './pages/react';
import ContactUs from './Components/contact';
import AddProduct from './Components/AddProduct';
import UpDateProduct from './Components/upDateProduct';
import DisplayProduct from './Components/DispalyProduct';
import ProductDetailPage from './Components/ProdutDetailPage';

function App(){
    
    return(
        <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Home component */}
           <Route path="/login" element={<Login />} />
           <Route path="/scan" element={<BarcodeScanner />} />
           <Route path="/home" element={<HomePage />} /> 
           <Route path='/logout' element={<Logout/>}/>
           <Route path='/contactus' element={<ContactUs/>}/>
           <Route path='/addproduct' element={<AddProduct/>}/>
           <Route path='/card' element={<DisplayProduct/>}/>
           <Route path='/updateProduct' element={<UpDateProduct/>}/>
           <Route path="/product/:productId" element={<ProductDetailPage />} />
        </Routes>
      </Router>
        
)
}
  
export default App
