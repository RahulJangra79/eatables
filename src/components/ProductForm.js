import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    type: '',
    status: '',
    discount: 0,
    userId: '',
    rating: '',
    likes: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange} placeholder="Description" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <div>
          <input type="text" id="type" name="type" value={formData.type} onChange={handleChange} placeholder="Type" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} placeholder="Status" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <input type="number" id="discount" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} placeholder="User ID" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <input type="text" id="rating" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <input type="number" id="likes" name="likes" value={formData.likes} onChange={handleChange} placeholder="Likes" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
