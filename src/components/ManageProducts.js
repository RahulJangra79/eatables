import React, { useEffect, useState } from 'react';
import "./ManageProducts.css";
import axios from 'axios';

const ManageProducts = () => {
    const [data, setData] = useState();

    useEffect(() => {
        /*axios.get("http://localhost:5000/products")
            .then((response) => {
                console.log("response Data =>", response.data.products);
                setData(response.data.products);
            })
            .catch((err) => {
                console.log("Error =>", err);
            });*/
            getData();
            
    }, []);
    async function deleteUser(id)

    {
        console.log("id=>", id)
       let result = await fetch("http://localhost:5000/products/"+id,{
            method:'DELETE'
        });
           result= await result.json();
                console.warn(result)
                getData();
    }
    async function getData()
    {
        axios.get("http://localhost:5000/products")
            .then((response) => {
                console.log("response Data =>", response.data.products);
                setData(response.data.products);
            })
            .catch((err) => {
                console.log("Error =>", err);
            });
    }
    return (
        <div className='manage-products'>
            <h1 className='manage-products-heading'>Manage Products</h1>
            <table className='manage-products-table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Discount</th>
                        <th>Rating</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                        console.log("item=>",item)
                      return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.type}</td>
                            <td>{item.status}</td>
                            <td>{item.discount}</td>
                            <td>{item.rating}</td>
                            <td className='manage-products-icons'>
                              <button><i class="fa-solid fa-pen-to-square"></i></button>
                              <button onClick={()=>deleteUser(item._id)}><i class="fa-solid fa-trash"></i></button>
                            </td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ManageProducts;

