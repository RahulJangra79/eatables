import React, { useState } from 'react';
import './UserLogin.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const UserLogin = ({ isUserLogin, setIsUserLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
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

    if (isRegistering) {
      const { username, email, password, confirmPassword } = formData;
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      // Handle registration logic here
      try {
        const response = await axios.post('http://localhost:2000/register', {
          username,
          email,
          password
        });
        setMessage(response.data.message);
      } catch (error) {
        setError(error.response?.data?.message || 'Error registering user');
      }
    } else {
      const { email, password } = formData;
      // Handle login logic here
      try {
        const response = await axios.post('http://localhost:2000/login', {
          email,
          password
        });

        const token = response.data.token;
        console.log("token=>", token);
        localStorage.setItem('jwt', token);
        setMessage(response.data.message);
        // onLoginSuccess(); // Call onLoginSuccess callback
        setIsUserLogin(true);
        navigate('/Home');
      } catch (error) {
        setError(error.response?.data?.message || 'Error logging in');
      }
    }
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setError('');
    setMessage('');
  };

  return (
    <div className="auth-page">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        )}
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
        {isRegistering && (
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <button className="toggle-btn" onClick={toggleForm}>
        {isRegistering ? 'Switch to Login' : 'Switch to Register'}
      </button>
      <Link className='admin-login-link' to="admin_Login">Login As Admin</Link>
    </div>
  );
};

export default UserLogin;
