import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ProductForm = () => {
   const [formData, setFormData] = useState({
      name: '',
      price: '',
      description: '',
      type: '',
      status: '',
      discount: '',
      userId: '',
      rating: ''
   });

   const [image, setImage] = useState(null);
   const [imageUrl, setImageUrl] = useState('');

   const handleImageChange = (e) => {
      setImage(e.target.files[0]);
   };

   const handleUpload = async () => {
      if (!image) {
         return Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please select an image to upload',
         });
      }

      try {
         const formData = new FormData();
         formData.append('file', image);
         formData.append('upload_preset', 'mynxgqgw');

         const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dmjuvhepw/image/upload',
            formData
         );

         console.log('Image uploaded:', response.data.secure_url);
         setImageUrl(response.data.secure_url); // Save the image URL to state
      } catch (error) {
         console.error('Error uploading image:', error);
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Image upload failed. Please try again.',
         });
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         if (!imageUrl) {
            return Swal.fire({
               icon: 'error',
               title: 'Error',
               text: 'Please upload an image',
            });
         }

         const productData = { ...formData, image_URL: imageUrl }; // Include image URL in formData

         const response = await axios.post('http://localhost:2000/products', productData);
         console.log(response.data);

         setFormData({
            name: '',
            price: '',
            description: '',
            type: '',
            status: '',
            discount: '',
            userId: '',
            rating: ''
         });

         setImage(null);
         setImageUrl(''); // Clear image URL after submission

         Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Product added successfully',
         });
      } catch (error) {
         console.error('Error submitting form:', error);
         Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to add product. Please try again.',
         });
      }
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
               <input type="text" id="rating" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div>
               <input type="file" accept="image/*" onChange={handleImageChange} />
               <button type="button" onClick={handleUpload} disabled={!image} className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 mt-2">
                  Upload
               </button>
               {imageUrl && <img src={imageUrl} alt="Uploaded" className="mt-2" width="100" />}
            </div>
            <div>
               <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Add Product</button>
            </div>
         </form>
      </div>
   );
};

export default ProductForm;
