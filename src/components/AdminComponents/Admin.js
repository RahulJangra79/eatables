import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import ManageProducts from './ManageProducts';
import ProductForm from './ProductForm';
import AdminForm from './AdminForm';
import AdminHome from './AdminHome';

function Admin() {
  const [activeComponent, setActiveComponent] = useState('WelcomeAdmin');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'ManageProducts':
        return <ManageProducts />;
      case 'ProductForm':
        return <ProductForm />;
      case 'AdminForm':
        return <AdminForm />;
      case 'WelcomeAdmin':
      default:
        return <AdminHome />;
    }
  };

  return (
    <div className="admin-home">
      <header className="header">
        <h1>My Website Name</h1>
        <p>Website information and description.</p>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul>
          <li>
              <Link to="#" onClick={() => setActiveComponent('WelcomeAdmin')}>
                Admin Home
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveComponent('AdminForm')}>
                Website Details
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveComponent('ProductForm')}>
                Add Product
              </Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveComponent('ManageProducts')}>
                Manage Products
              </Link>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
}

export default Admin;
