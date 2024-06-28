import React, { useState } from 'react';
import './AdminForm.css';

function AdminForm() {
  const [formData, setFormData] = useState({
    heading: '',
    websiteName: '',
    address: '',
    email: '',
    contactNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="AdminForm">
      <header className="App-header">
        <h1>Website Details</h1>
      </header>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="websiteName">Website Name:</label>
          <input
            type="text"
            id="websiteName"
            name="websiteName"
            value={formData.websiteName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="heading">Heading:</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="contactNo">Contact No:</label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AdminForm;
