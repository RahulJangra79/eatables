import React, { useEffect, useState } from 'react'
import "./ManageProducts.css"
import { productsData } from './data/ProductsData';
import axios from 'axios'

const ManageProducts = () => {

    useEffect(() => {
        axios.fetch("http://localhost:5000/products").then((response)=>{
            console.log("responseData =>", response)

            }).catch((err)=>{
                console.log("Error =>",err);
            });
    },[])
    console.log("productsData =>",productsData)


  return (
    <>
      <h1>Manage Products</h1>
      <table className='manage-products-table'>
        <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Type</td>
            <td>Status</td>
            <td>Discount</td>
            <td>Rating</td>
        </tr>
        {
            productsData.map((item)=>{

            
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>{item.type}</td>
                <td>{item.status}</td>
                <td>{item.discount}</td>
                <td>{item.rating}</td>
            </tr>
            }
            )
        }
      </table>
    </>
  )
}

export default ManageProducts
