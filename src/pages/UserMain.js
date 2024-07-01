import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../components/UserComponents/Header';
import { UserHome } from '../pages/UserHome';
import Cart from '../components/UserComponents/Cart';
import Contact from '../components/UserComponents/Contact';
// import Our_products from '../components/UserComponents/Our_products';
import Products from '../components/UserComponents/Bestseller';
import Footer1 from '../components/UserComponents/Footer1';
import UserLogin from '../components/login/UserLogin';
// import AdminLogin from '../components/login/AdminLogin';
import OurProducts from '../components/UserComponents/Our_products';


const UserMain = () => {
    
  const [isUserLogin, setIsUserLogin] = useState(false);
  // const [isAdminLogin, setIsAdminLogin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />
        <Routes>
          <Route path="/Home" element={<UserHome />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Our_products" element={<OurProducts />} />
          <Route path="/Bestseller" element={<Products />} />

          <Route path="/Login_signUp" element={<UserLogin isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />} />
          {/* <Route path="/Login_signUp/admin_login" element={<AdminLogin isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />} /> */}

        </Routes>
        <Footer1 />
      </BrowserRouter>
    </div>
  )
}

export default UserMain

// import React from 'react'

// const UserMain = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default UserMain
