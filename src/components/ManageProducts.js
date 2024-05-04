import React, { useEffect, useState } from "react";
import "./ManageProducts.css";
import axios from "axios";
import Swal from 'sweetalert2';

const ManageProducts = () => {
  const [data, setData] = useState();
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((response) => {
        console.log("response Data =>", response?.data?.products);
        setData(response?.data?.products);
      })
      .catch((err) => {
        console.log("Error =>", err);
      });
  }, []);

  const handleEdit = (item) => {
    setEditing(item);
  };

  const handleUpdate = (item) => {
    axios
      .put(`http://localhost:5000/products/${item._id}`, item)
      .then((response) => {
        console.log("Data Updated Successfully!");
        // ********
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Product Updated Successfully',
        });
        // ********
        const updatedData = data.map((product) => {
          if (product._id === item._id) {
            return item;
          }
          return product;
        });
        setData(updatedData);
        setEditing(null);
      })
      .catch((err) => {
        console.log("Error =>", err);
      });
  };

  async function deleteUser(id) {
    console.log("id=>", id)
    let result = await fetch("http://localhost:5000/products/" + id, {
      method: 'DELETE'
    });
    result = await result.json();
    console.warn(result);

    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Product Deleted Successfully',
    });

    const updatedData = data.filter((item) => item._id !== id);
    setData(updatedData);
  }

  return (
    <div className="manage-products">
      <h1 className="manage-products-heading">Manage Products</h1>
      <table className="manage-products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th style={{ minWidth: '350px' , width: '600px' }}>Description</th>
            <th>Status</th>
            <th>Discount</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.status}</td>
                <td>{item.discount}</td>
                <td>{item.rating}</td>
                <td className="manage-products-icons">
                  <button onClick={() => handleEdit(item)}>
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button onClick={() => deleteUser(item._id)}>
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {editing && (
        <div className="edit-product">
          <h2 className="edit-product-heading">Edit Product</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editing);
            }}
          >
            <div className="edit-form-sections">
              <div className="label">
                {/* Name : */}
                <input
                  type="text"
                  placeholder="Name"
                  value={editing.name}
                  onChange={(e) => {
                    setEditing({ ...editing, name: e.target.value });
                  }}
                />
              </div>
              <div className="label">
                {/* Price : */}
                <input
                  type="number"
                  placeholder="Price"
                  value={editing.price}
                  onChange={(e) => {
                    setEditing({ ...editing, price: e.target.value });
                  }}
                />
              </div>
              <div className="label">
                {/* Description : */}
                <input
                  type="text"
                  placeholder="Description"
                  value={editing.description}
                  onChange={(e) => {
                    setEditing({ ...editing, description: e.target.value });
                  }}
                />
              </div>
              <div className="label">
                {/* Status : */}
                <input
                  type="text"
                  placeholder="Status"
                  value={editing.status}
                  onChange={(e) => {
                    setEditing({ ...editing, status: e.target.value });
                  }}
                />
              </div>
              <div className="label">
                {/* Discount : */}
                <input
                  type="number"
                  placeholder="Discount"
                  value={editing.discount}
                  onChange={(e) => {
                    setEditing({ ...editing, discount: e.target.value });
                  }}
                />
              </div>
              <div className="label">
                {/* Rating : */}
                <input
                  type="number"
                  placeholder="Rating"
                  value={editing.rating}
                  onChange={(e) => {
                    setEditing({ ...editing, rating: e.target.value });
                  }}
                />
              </div>
            </div>
            <button className="edit-product-button" type="submit">
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default ManageProducts;

