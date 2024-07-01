import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminLogin from '../components/login/AdminLogin';
import ManageProducts from '../components/AdminComponents/ManageProducts';
import AdminHome from '../components/AdminComponents/AdminHome';
import ProductForm from '../components/AdminComponents/ProductForm';
import AdminForm from '../components/AdminComponents/AdminForm';

const AdminMain = () => {

    const [isAdminLogin, setIsAdminLogin] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
            
          <Route path="/Login_signUp/admin_login" element={<AdminLogin isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/AdminHome/ManageProducts" element={<ManageProducts />} />
          <Route path="/AdminHome/ProductForm" element={<ProductForm />} />
          <Route path="/AdminHome/AdminForm" element={<AdminForm />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AdminMain
