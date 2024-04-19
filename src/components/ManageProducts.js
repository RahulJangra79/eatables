import React, { useEffect, useState } from 'react';
import "./ManageProducts.css";
import axios from 'axios';

const ManageProducts = () => {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((response) => {
                console.log("response Data =>", response.data);
                setData(response.data.products);
            })
            .catch((err) => {
                console.log("Error =>", err);
            });
    }, []);

    return (
        <>
            <h1>Manage Products</h1>
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
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item, index) => {
                      return(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.type}</td>
                            <td>{item.status}</td>
                            <td>{item.discount}</td>
                            <td>{item.rating}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ManageProducts;
