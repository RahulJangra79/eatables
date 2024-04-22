import React, { useEffect, useState } from 'react';
import "./ManageProducts.css";
import axios from 'axios';

const ManageProducts = () => {
    const [data, setData] = useState();
    const [editing, setEditing] = useState(null);


    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((response) => {
                console.log("response Data =>", response.data.products);
                setData(response.data.products);
            })
            .catch((err) => {
                console.log("Error =>", err);
            });
    }, []);

    const handleEdit = (item) => {
        setEditing(item);
      };
    
      const handleUpdate = (item) => {
        axios.put(`http://localhost:5000/products/${item._id}`, item)
          .then((response) => {
            console.log("Data Updated Successfully!");
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
    

    return (
        <div className='manage-products'>
            <h1 className='manage-products-heading'>Manage Products</h1>
            <table className='manage-products-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Discount</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                      return(
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                            <td>{item.discount}</td>
                            <td>{item.rating}</td>
                            <td className='manage-products-icons'>
                              <button onClick={() => handleEdit(item)}><i class="fa-solid fa-pen-to-square"></i></button>
                              <button><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>

            {editing && (
        <div>
          <h2>Edit Product</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(editing);
          }}>
            <label>
              Name:
              <input type="text" value={editing.name} onChange={(e) => {
                setEditing({ ...editing, name: e.target.value });
              }} />
            </label>
            <label>
              Price:
              <input type="number" value={editing.price} onChange={(e) => {
                setEditing({ ...editing, price: e.target.value });
              }} />
            </label>
            <label>
              Description:
              <input type="text" value={editing.description} onChange={(e) => {
                setEditing({ ...editing, description: e.target.value });
              }} />
            </label>
            <label>
              Status:
              <input type="text" value={editing.status} onChange={(e) => {
                setEditing({ ...editing, status: e.target.value });
              }} />
            </label>
            <label>
              Discount:
              <input type="number" value={editing.discount} onChange={(e) => {
                setEditing({ ...editing, discount: e.target.value });
              }} />
            </label>
            <label>
              Rating:
              <input type="number" value={editing.rating} onChange={(e) => {
                setEditing({ ...editing, rating: e.target.value });
              }} />
            </label>
            <button type="submit">Update</button>
          </form>
        </div>
      )}


        </div>
    );
}

export default ManageProducts;
