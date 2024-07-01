import React, { useState } from 'react';
import './UserLogin.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AdminLogin = ({ isAdminLogin, setIsAdminLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const { email, password } = formData;
    try {
      const response = await axios.post('http://localhost:2000/admin/login', {
        email,
        password
      });

      const token = response.data.token;
      console.log("token=>", token);
      localStorage.setItem('admin_jwt', token);
      setMessage(response.data.message);
      setIsAdminLogin(true);
      navigate('/AdminHome');
    } catch (error) {
      setError(error.response?.data?.message || 'Error logging in');
    }
  };

  return (
    <div className="auth-page">
      <h2>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link className='admin-login-link' to="/Login_signUp">Login As User</Link>
    </div>
  );
};

export default AdminLogin;
