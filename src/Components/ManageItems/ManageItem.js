import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useItems from '../../Hooks/useItems';
const ManageItem = (props) => {
    const { _id, name, img,supplier,quantity,description, email
    } = props.send
    const {items, setItems} = useItems()
    

    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }
 
   

    return (
        <div>


 <div className='custom-shadow py-10 rounded-md'>
<div style={{ border: "none" }} className="max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg w-2/3 mx-auto" src={img} alt="" />
    <div className="p-5">
        <h1 className='font-bold'>  Name: {name}</h1>

        <p className="mb-3 font-normal pt-5 text-gray-700 dark:text-gray-400"><span className='font-bold'>Description:</span>    {description} </p>
        <p><span className='font-bold'>Supplier:</span> {supplier}</p>
        <p><span className='font-bold'>quantity:</span> {quantity}</p>
        

    </div>
    <button onClick={() => handleUpdate(_id)} className='bg-[#031bf7] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Update</button>
    <button onClick={() => props.sendEvent(_id)} className='bg-red-600 hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Delete</button>
</div>
<ToastContainer />
</div>
        </div>
       
    );
};

export default ManageItem;