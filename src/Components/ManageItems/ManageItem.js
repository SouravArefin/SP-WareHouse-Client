import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useItems from '../../Hooks/useItems';
const ManageItem = (props) => {
    const { _id, name, img, details, price, Duration, quantity } = props.send
    const {items, setItems} = useItems()
    

    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }
 
    const handleDelete = id => {
        const confirmMsg = window.confirm("Are you sure?")

        if (confirmMsg) {
            console.log("delete with id", id)
            
            fetch(`http://localhost:4000/items/${id}`, {
                method: 'DELETE',


            })
                .then(res => res.json())
                .then(data => {
                    const newItems = [...items, data]
                    setItems(newItems)
                })
            toast('Item delete successfully')
        }
        else {
            toast('ok,No problem')
        }
    }

    return (
        <div>


 <div className='custom-shadow py-10 rounded-md'>
<div style={{ border: "none" }} className="max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg w-2/3 mx-auto" src={img} alt="" />
    <div className="p-5">
        <h1 className='font-bold'> Package Name: {name}</h1>

        <p className="mb-3 font-normal pt-5 text-gray-700 dark:text-gray-400"><span className='font-bold'>Benefits:</span>    {details} </p>
        <p><span className='font-bold'>Price:</span> BDT, {price}/-</p>
        <p><span className='font-bold'>quantity:</span> {quantity}</p>
        <p><span className='font-bold'>Time:</span> : {Duration}</p>

    </div>
    <button onClick={() => handleUpdate(_id)} className='bg-[#031bf7] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Details</button>
    <button onClick={() => handleDelete(_id)} className='bg-red-600 hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Delete</button>
</div>
<ToastContainer />
</div>
        </div>
       
    );
};

export default ManageItem;