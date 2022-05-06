import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ManageItem = (props) => {
    const { _id, name, img,supplier,quantity,description,sold,price, email
    } = props.send
    console.log(props.send);
    //const {items, setItems} = useItems()
    
    const navigate = useNavigate()
    const handleUpdate = (id) => {
        navigate(`/inventory/${id}`)
    }
    let chnageQuantity = quantity <= 0 ? <span className='bg-red-600   p-1  text-white'>Stock-Out</span> : quantity
    console.log(chnageQuantity);
    return (
        <div>


 <div className='custom-shadow py-10 rounded-md'>
<div style={{ border: "none" }} className="max-w-sm  rounded-lg border text-center">
    <img className="rounded-t-lg w-2/3 mx-auto hover:scale-110 transform duration-100 ease-linear" src={img} alt="" />
    <div className="p-5">
        <h1 className='font-bold'>  Name: {name}</h1>

        <p className="mb-3 font-normal pt-5 text-gray-700 dark:text-gray-400"><span className='font-bold'>Description:</span>    {description} </p>
        <p><span className='font-bold'>Supplier:</span> {supplier}</p>
        <p><span className='font-bold'>In-Stock:</span> {chnageQuantity}  </p>
        <p><span className='font-bold'>Price:</span>BDT {price}/- </p>
        <p><span className='font-bold'>Sold:</span> {sold}</p>
        

    </div>
                    <button onClick={() => handleUpdate(_id)} className='bg-[#031bf7] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Update
                    <FontAwesomeIcon className="ml-2" icon={faEdit} ></FontAwesomeIcon>
                    </button>
                   
                   
                    <button onClick={() => props.sendEvent(_id)} className='bg-red-600 hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'>Delete
                    
                    <FontAwesomeIcon className="ml-2" icon={faTrashAlt} ></FontAwesomeIcon>
                    </button>
</div>
<ToastContainer />
</div>
        </div>
       
    );
};

export default ManageItem;